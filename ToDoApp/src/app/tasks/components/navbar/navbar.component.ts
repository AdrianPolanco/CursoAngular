import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { validateDate } from '../../validators/date.validator';
import { Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';
import { Task, TaskStatus } from '../../types/task.type';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'tasks-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  minDate: Date = new Date();
  maxDate: Date = new Date(this.minDate);
  descriptionSubscription?: Subscription;

  constructor(private fb: FormBuilder, private storageService: StorageService) {
    this.maxDate.setFullYear(this.minDate.getFullYear() + 1);
  }

  isFormVisible = false;
  items: MenuItem[] = [
    {
      label: 'Tasks',
      icon: 'pi pi-list-check',
      routerLink: '/',
      shortcut: 'Ctrl+T',
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      routerLink: '/about',
      shortcut: 'Ctrl+A',
    },
  ];

  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', []],
    dueDate: ['', [Validators.required, validateDate()]],
  });

  ngOnInit(): void {
    const control = this.form.get('description');
    this.descriptionSubscription = control?.valueChanges.subscribe(() => {
      if(control.value !== "")this.addDescriptionValidator();
    });
  }

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  addDescriptionValidator(): void {
    const control = this.form.get('description');

    // Si el campo está vacío, se elimina el validador
    if (!control?.value) {
      if(!control?.hasValidator(Validators.minLength(10))) return;
      control?.clearValidators();
      control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      return;
    }

    // Si el campo no está vacío, se agrega el validador
    control.setValidators([Validators.minLength(10)]);
    control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }

  createTask(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    };

    const formValue = this.form.value
    const task: Task = {
      id: uuid(),
      title: formValue.title as string,
      description: formValue.description as string,
      dueDate: formValue.dueDate as Date,
      status: TaskStatus.IN_PROGRESS,
      createdAt: new Date(),
    };
    this.storageService.save(task);
    this.form.reset();
    this.toggleForm();
  }

  ngOnDestroy(): void {
    this.descriptionSubscription?.unsubscribe();
  }
}
