import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PotatoComponent } from './potato/potato.component';
import { PotatoListComponent } from './potato-list/potato-list.component';
import { SpudComponent } from './spud/spud.component';
import { SpudListComponent } from './spud-list/spud-list.component';
import { NavHomeComponent } from './nav-home/nav-home.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    PotatoComponent,
    PotatoListComponent,
    SpudComponent,
    SpudListComponent,
    NavHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
