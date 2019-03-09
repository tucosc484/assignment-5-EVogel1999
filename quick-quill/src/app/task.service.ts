import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private storage = window.localStorage;

  constructor() { }

  createTask() {

  }

  updateTask(id: number, data) {
    //this.storage.setItem('' + id, JSON.stringify(data));
  }

  deleteTask(id: number) {
    //this.storage.removeItem('' + id);
  }

  getTask(id: number) {
    //return this.storage.getItem('' + id);
  }

  getTasks() {

  }
}
