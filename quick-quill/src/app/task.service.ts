import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Task } from '../interfaces/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/**
 * Service that deals with the creating, deleting, updating, or getting of tasks.
 */
export class TaskService {

  /**
   * Empty constructor for Task Service
   */
  constructor(private http: HttpClient) { }

  /**
   * Creates a new task given description data, returns a string if created successfully.
   * @param data The description data of a new task
   * @returns {Observable<string>} Returns task as a string if successfully created
   */
  createTask(data: string): Observable<string> {
    let id = this.createID();
    let task: Task = {
      id: id,
      dateCreated: new Date(),
      description: data,
      isComplete: false
    };

    localStorage.setItem('' + id, JSON.stringify(task));

    return of(JSON.stringify(task));
  }

  /**
   * Updates a task's data given the task's id and data to update.
   * @param id The id of a given task
   * @param data The data to update a given task, uses the Task interface
   */
  updateTask(id: number, data: Task) {
    localStorage.setItem('' + id, JSON.stringify(data));
  }

  /**
   * Deletes a task given a task id
   * @param id The id of a given task
   */
  deleteTask(id: number) {
    localStorage.removeItem('' + id);
  }

  /**
   * Returns a task given a task id
   * @param id The id of a given task
   * @returns {string} Returns the task in string format
   */
  getTask(id: number): Observable<string> {
    const task = localStorage.getItem('' + id);
    if (task)
      return of(task);
    else
      return Observable.throw('Error: Task not found');
  }

  /**
   * Returns the tasks a user has in a string of arrays
   * @returns {string[]} Returns tasks in string array format
   */
  getTasks(): Observable<string[]> {
    const keys = Object.keys(localStorage);

    let result = [];
    keys.forEach(key => {
      result.push(localStorage.getItem(key));
    });

    return of(result);
  }

  /**
   * Finds an open ID number given what is in local storage
   * @returns {number} Returns a unique and valid id number
   */
  private createID(): number {
    const keys = Object.keys(localStorage);
    keys.sort();
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
