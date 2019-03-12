import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  createTask(data) {
    let id = this.createID();
    let task: Task = {
      id: id,
      dateCreated: Date.now(),
      description: data,
      isComplete: false
    };

    localStorage.setItem('' + id, JSON.stringify(task));

    return of(JSON.stringify(task));
  }

  updateTask(id: number, data) {
    //localStorage.setItem('' + id, JSON.stringify(data));
  }

  deleteTask(id: number) {
    //localStorage.removeItem('' + id);
  }

  getTask(id: number): Observable<string> {
    return of(localStorage.getItem('' + id));
  }

  getTasks(): Observable<string[]> {
    const keys = Object.keys(localStorage);

    let result = [];
    keys.forEach(key => {
      result.push(localStorage.getItem(key));
    });

    return of(result);
  }

  private createID(): number {
    const keys = Object.keys(localStorage);
    let id = 1;

    for (let i = 0; i < keys.length; i++) {
      const key = Number.parseInt(keys[i]);
      if (id !== key)
        break;
      id++;
    }

    return id;
  }
}
