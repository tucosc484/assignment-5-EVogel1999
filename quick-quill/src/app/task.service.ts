import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  createTask(data) {

  }

  updateTask(id: number, data) {
    //localStorage.setItem('' + id, JSON.stringify(data));
  }

  deleteTask(id: number) {
    //localStorage.removeItem('' + id);
  }

  getTask(id: number) {
    //localStorage.getItem('' + id);
  }

  getTasks(): Observable<any[]> {
    const keys = Object.keys(localStorage);
    const total = keys.length;

    let result = [];
    for (let i = 0; i < total; i++)
      result.push(localStorage.getItem(keys[i]));

    return of(result);
  }

  private createID() {
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
