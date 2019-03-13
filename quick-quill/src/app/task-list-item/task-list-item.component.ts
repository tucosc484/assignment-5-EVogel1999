import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
/**
 * Task List Item Component class.
 * Holds individual task data to display on front end.
 */
export class TaskListItemComponent implements OnInit {

  @Input()
  task: Task;

  description: string;

  /**
   * Empty constructor
   */
  constructor() { }

  /**
   * Caps the string visible by 400 characters and ends it with a ellipse
   */
  ngOnInit() {
    this.description = this.task.description.substring(0, 400) + '...';
  }

}
