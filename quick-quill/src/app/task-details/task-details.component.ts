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

  constructor(private service: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params)
        this.service.getTask(params.id)
        .subscribe(task => {
          if (task) {
            this.task = JSON.parse(task);
          }
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
      this.service.updateTask(this.task.id, this.task);
    }
    else {
      this.task.isComplete = false;
      this.task.dateCompleted = '';
      this.service.updateTask(this.task.id, this.task);
    }
  }

  onEdit() {

  }

}
