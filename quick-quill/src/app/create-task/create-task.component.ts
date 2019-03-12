import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from '../task.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  model = {
    description: ''
  };

  constructor(private router: Router, private service: TaskService) { }

  ngOnInit() {
  }

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
