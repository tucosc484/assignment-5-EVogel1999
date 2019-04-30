import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from '../task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
/**
 * Component class that holds methods and logic to create a new task.
 * Holds a model that is used to create a task using the onSubmit function.
 */
export class CreateTaskComponent implements OnInit {

  model = {
    description: ''
  };

  /**
   * Constructor for the Create Task Componenet class
   * @param router Angular router, used to route to other components
   * @param service Task Service, used to create new task
   */
  constructor(private router: Router, private service: TaskService) { }

  /**
   * Empty ngOnInit function
   */
  ngOnInit() { }

  /**
   * Creates task using a form and model, calling the Task Service service.
   * It then sends the user to the newly created task's detail page.
   */
  async onSubmit() {
    await this.service.createTask(this.model.description);
    this.router.navigate(['']);
  }

}
