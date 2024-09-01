import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateDate } from '../../validators/date.validator';
import { Subscription } from 'rxjs';
import { Task, TaskStatus } from '../../types/task.type';
import { StorageService } from '../../services/storage.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'tasks-form',
  templateUrl: './form.component.html',
  styles: ``,
})
export class FormComponent implements OnInit, OnDestroy {
  private _task?: Task;
  @Input() mode: 'create' | 'edit' = 'create';
  @Input({ required: false }) set task(value: Task) {
    if (this.mode !== 'edit') return;
    this._task = value;
    this._task.dueDate = new Date(this._task.dueDate);
    if (this._task) this.form.patchValue(this._task);
  }
  @Input() icon: 'pi pi-plus-circle' | 'pi pi-pencil' = 'pi pi-plus-circle';
  @Input() size: 'small' | 'large' = 'large';

  isFormVisible = false;

  minDate: Date = new Date();
  maxDate: Date = new Date(this.minDate);
  descriptionSubscription?: Subscription;

  constructor(private fb: FormBuilder, private storageService: StorageService) {
    this.maxDate.setFullYear(this.minDate.getFullYear() + 1);
  }

  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', []],
    dueDate: ['', [Validators.required, validateDate()]],
  });

  ngOnInit(): void {
    if (this.mode === 'edit') {
      if (!this._task)
        throw new Error('Una tarea es requerida para el modo de edición');
      this.form.addControl(
        'id',
        this.fb.control(this._task.id, [Validators.required])
      );
      this.form.addControl(
        'status',
        this.fb.control(this._task.status, [Validators.required])
      );
    }

    const control = this.form.get('description');
    this.descriptionSubscription = control?.valueChanges.subscribe(() => {
      if (control.value !== '') this.addDescriptionValidator();
    });
  }

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  addDescriptionValidator(): void {
    const control = this.form.get('description');

    // Si el campo está vacío, se elimina el validador
    if (!control?.value) {
      if (!control?.hasValidator(Validators.minLength(10))) return;
      control?.clearValidators();
      control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      return;
    }

    // Si el campo no está vacío, se agrega el validador
    control.setValidators([Validators.minLength(10)]);
    control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.mode === 'create') this.createTask();
    else this.editTask();
  }

  private createTask(): void {

    const formValue = this.form.value;
    const task: Task = {
      id: uuid(),
      title: formValue.title as string,
      description: formValue.description as string,
      dueDate: formValue.dueDate as Date,
      status: TaskStatus.PENDING,
      createdAt: new Date(),
    };
    this.storageService.save(task);
    this.form.reset();
    this.toggleForm();
  }

  private editTask(): void {
    const formValue = this.form.value;
    const task: Task = {
      id: formValue.id,
      title: formValue.title as string,
      description: formValue.description as string,
      dueDate: formValue.dueDate as Date,
      status: formValue.status as TaskStatus,
      createdAt: this._task?.createdAt as Date,
      updatedAt: new Date(),
    };
    this.storageService.update(task);
    this.form.reset();
    this.toggleForm();
  }

  ngOnDestroy(): void {
    this.descriptionSubscription?.unsubscribe();
  }
}
