import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { validateDate } from '../../validators/date.validator';

@Component({
  selector: 'tasks-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  minDate: Date = new Date();
  maxDate: Date = new Date(this.minDate);

  constructor(private fb: FormBuilder) {
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

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  addDescriptionValidator(): void {
    const control = this.form.get('description');

    if (!control?.value) {
      control?.clearValidators();
      return;
    }
    control.setValidators([Validators.minLength(10)]);
    control.updateValueAndValidity();
  }
}
