import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
/**
 * Task details component class.
 * Holds logic to get task given a id, edit task, complete task,
 * or delete task.
 */
export class TaskDetailsComponent implements OnInit {

  task: Task;
  model: Task;

  editing = false;

  /**
   * Constructor that initializes the following parameters
   * @param service Task Service, used to get and update a task
   * @param route Route, used to get id parameter for task
   * @param router Router, used to route to other components in app
   */
  constructor(private service: TaskService, private route: ActivatedRoute, private router: Router) { }

  /**
   * Subscribes to the parameters to get an individual task by id
   * getTask is subscribed to to get any changes from the task
   */
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params)
        this.service.getTask(params.id)
        .subscribe(task => {
          if (task)
            this.task = JSON.parse(task);
        });
    });
  }

  /**
   * When the user clicks the Delete button, it triggers this method.
   * This method sends the task id to delete to the Task Service service.
   * It then redirects users back to the task list page.
   */
  onDelete() {
    this.service.deleteTask(this.task.id);
    this.router.navigate(['/tasks']);
  }

  /**
   * When the user clicks on the Complete/Uncomplete button, it triggers this method.
   * This method sets the task to complete or uncomplete and records the time accordingly.
   * Then it sends the updated info to the Task Service service for update.
   */
  onComplete() {
    if (!this.task.isComplete) {
      this.task.isComplete = true;
      this.task.dateCompleted = Date().toString();
      if (this.model) {
        this.model.dateCompleted = this.task.dateCompleted;
        this.model.isComplete = this.model.isComplete;
      }
    }
    else {
      this.task.isComplete = false;
      this.task.dateCompleted = '';
      if (this.model) {
        this.model.dateCompleted = this.task.dateCompleted;
        this.task.isComplete = this.task.isComplete;
      }
    }
    this.service.updateTask(this.task.id, this.task);
  }

  /**
   * When the user clicks on the Edit button, it triggers this method.
   * This method toggles the editing view and sets up the model used to
   * save changes accordingly.
   */
  onEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.model = {
        id: this.task.id,
        description: this.task.description,
        dateCreated: this.task.dateCreated,
        dateCompleted: this.task.dateCompleted,
        isComplete: this.task.isComplete
      }
    }
    else {
      this.model = undefined;
    }
  }

  /**
   * When the user clicks on the Done button, it triggers this method.
   * This method saves the changes to the description, gotten from
   * 'model', of the task by using a Task Service service function call.
   */
  onSubmit() {
    this.service.updateTask(this.model.id, this.model);
    this.editing = false;
    this.task = this.model;
    this.model = undefined;
  }

}
