import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;
  model: Task;

  editing = false;

  constructor(private service: TaskService, private route: ActivatedRoute, private router: Router) { }

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

  onDelete() {
    this.service.deleteTask(this.task.id);
    this.router.navigate(['/tasks']);
  }

  onComplete() {
    if (!this.task.isComplete) {
      this.task.isComplete = true;
      this.task.dateCompleted = Date().toString();
      if (this.model)
        this.model = this.task;
      this.service.updateTask(this.task.id, this.task);
    }
    else {
      this.task.isComplete = false;
      this.task.dateCompleted = '';
      this.service.updateTask(this.task.id, this.task);
    }
  }

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

  onSubmit() {
    this.service.updateTask(this.model.id, this.model);
    this.editing = false;
    this.task = this.model;
    this.model = undefined;
  }

}
