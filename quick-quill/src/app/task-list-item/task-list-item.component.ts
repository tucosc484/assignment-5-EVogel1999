import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {

  @Input()
  task: Task;

  constructor() { }

  ngOnInit() { }

}
