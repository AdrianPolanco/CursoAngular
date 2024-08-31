import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly KEY = 'tasks';

  constructor() { }

  get(): Task[] {
    const tasks = localStorage.getItem(this.KEY);
    if (!tasks) return [];
    return JSON.parse(tasks);
  }

  getById(id: string): Task | null {
    const tasks = this.get();
    return tasks.find(task => task.id === id) || null;
  }

  save(task: Task) {
    const tasks = this.get();
    tasks.push(task);
    localStorage.setItem(this.KEY, JSON.stringify(tasks));
  }

  update(task: Task) {
    const tasks = this.get();
    const updatedTasks = tasks.map(t => t.id === task.id ? task : t);
    localStorage.setItem(this.KEY, JSON.stringify(updatedTasks));
  }

  remove(id: string) {
    const tasks = this.get();
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(updatedTasks));
  }
}
