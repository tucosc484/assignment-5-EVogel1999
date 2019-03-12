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

  constructor(private router: Router, private service: TaskService) { }

  ngOnInit() {
  }

  /**
   * Creates task using a form and model, calling the Task Service service.
   * It then sends the user to the newly created task's detail page.
   */
  onSubmit() {
    this.service.createTask(this.model.description)
    .subscribe(task => {
      if (task) {
        const newTask: Task = JSON.parse(task);
        this.router.navigate(['/tasks/', newTask.id]);
      }
    });
  }

}
