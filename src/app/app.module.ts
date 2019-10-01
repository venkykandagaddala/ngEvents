import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  ValidateloactionDirective,
  EventResolver
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  IToastr,
  CollapsableWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './events/error-404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const toastr: IToastr = window['toastr'];
const jQuery = window['$'];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateEventComponent,
    Error404Component,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    ValidateloactionDirective

  ],
  bootstrap: [EventsAppComponent],
  providers: [
    EventService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventsListResolver,
    EventResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved data, do you really want to cancel?');
  } else {
    return true;
  }
}
