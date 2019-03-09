import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  error;

  constructor(private service: TaskService) { }

  ngOnInit() {
    this.service.getTasks().subscribe(tasks => {
      if (tasks)
        tasks.map(task => {
          this.tasks.push(JSON.parse(task));
        });
    },
    e => this.error = e );
  }

}
