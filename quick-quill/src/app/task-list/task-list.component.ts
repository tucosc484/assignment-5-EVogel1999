import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks;
  // tasks: Task[] = [
  //   {
  //     id: 1,
  //     dateCreated: Date.now(),
  //     description: 'Lorem ipsum dolor sit amet, cu ius assum vocent vulputate, his aeque denique in. Nec in meliore conceptam dissentiunt, eos eu rebum dolor indoctum. Detracto oportere ei cum. Harum molestie inciderint eu eum, pri id amet nonumy imperdiet. Lobortis quaestio quo ne, no meis soleat oportere duo. Cum ne scripta argumentum, eos et tale verterem sadipscing. No duo semper nostrum perfecto. Id duo veri putant, quo illum aperiam facilisi id, cu quando senserit eum. Duo no quando torquatos, ludus appellantur qui eu. Doming timeam scaevola at vel.',
  //     isComplete: false
  //   }
  // ];

  constructor() { }

  ngOnInit() { }

}
