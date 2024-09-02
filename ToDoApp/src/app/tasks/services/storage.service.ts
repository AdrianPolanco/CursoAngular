import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly KEY = 'tasks';
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.get());
  tasks$ = this.tasksSubject.asObservable();

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
    this.tasksSubject.next(tasks);
  }

  update(task: Task) {
    const tasks = this.get();
    const updatedTasks = tasks.map(t => t.id === task.id ? task : t);
    localStorage.setItem(this.KEY, JSON.stringify(updatedTasks));
    this.tasksSubject.next(updatedTasks);
  }

  remove(id: string) {
    const tasks = this.get();
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(updatedTasks));
    this.tasksSubject.next(updatedTasks);
  }
}
