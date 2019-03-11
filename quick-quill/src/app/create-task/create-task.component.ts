import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  model = {
    description: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/tasks']);
  }

}
