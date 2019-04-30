import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
/**
 * Task List Component class.
 * Gets tasks created by the user to display them via the Task List Item Component
 */
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  error;

  /**
   * Constructor that initializes the parameters listed bellow
   * @param service Holds task service task which gets list of tasks
   */
  constructor(private service: TaskService) { }

  /**
   * Subscribes to the getTasks method in Task Service to get the list of tasks
   * a user has
   */
  ngOnInit() {
    this.service.getTasks().then(val => {
      this.tasks = val;
    }).catch(e => this.error = e);
  }

}
