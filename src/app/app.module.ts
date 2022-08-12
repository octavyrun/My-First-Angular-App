import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';

import {
  EventListComponent,
  CreateEventComponent,
  EventThumbnailComponent,
  EventListResolver,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
} from './events/index'


import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent, EventListComponent, EventThumbnailComponent, NavBarComponent, EventDetailsComponent, CreateEventComponent, Error404Component,
  ],
  providers:[
    EventService,
    ToastrService, 
    EventRouteActivator,
    EventListResolver,
    {provide: 'canDeactivateCreateEvent',
     useValue: checkDirtyState},
     AuthService 
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  } else {
    return true;
  }
}

