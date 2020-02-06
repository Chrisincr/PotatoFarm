import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PotatoListComponent } from './potato-list/potato-list.component';
import { SpudListComponent } from './spud-list/spud-list.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  { path: 'potatoes', component: PotatoListComponent },
  { path: 'spuds', component: SpudListComponent },
  { path: 'tasks', component: TaskListComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
