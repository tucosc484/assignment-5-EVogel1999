import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'tasks', component: TaskListComponent },
  // { path: 'tasks/create', component: CreateTaskComponent },
  // { path: 'tasks/:id', component: TaskDetailsComponent },
  // { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
