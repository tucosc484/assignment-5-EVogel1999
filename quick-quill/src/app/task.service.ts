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
   * @returns {Promise<any>} Verifies the request was completed
   */
  createTask(data: string) {
    return this.http.post('https://assignment-6-tasks-api.herokuapp.com/api/tasks', {
      description: data
    }, { responseType: 'text' }).toPromise();
  }

  /**
   * Updates a task's data given the task's id and data to update.
   * @param id The id of a given task
   * @param data The data to update a given task, uses the Task interface
   */
  updateTask(id: string, data: Task) {
    return this.http.patch('https://assignment-6-tasks-api.herokuapp.com/api/tasks/'+id, data).toPromise();
  }

  /**
   * Deletes a task given a task id
   * @param id The id of a given task
   */
  deleteTask(id: string) {
    return this.http.delete('https://assignment-6-tasks-api.herokuapp.com/api/tasks/'+id).toPromise();
  }

  /**
   * Returns a task given a task id
   * @param id The id of a given task
   * @returns {string} Returns the task in string format
   */
  getTask(id: string): Promise<Task> {
    return this.http.get<Task>('https://assignment-6-tasks-api.herokuapp.com/api/tasks/'+id).toPromise();
  }

  /**
   * Returns the tasks a user has in a string of arrays
   * @returns {Task[]} Returns tasks array
   */
  getTasks(): Promise<Task[]> {
    return this.http.get<Task[]>('https://assignment-6-tasks-api.herokuapp.com/api/tasks').toPromise();
  }
}
