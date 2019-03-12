import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;

  constructor(private service: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params)
        this.service.getTask(params.id);
    })
  }

}
