import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { 
  CourseListComponent,
  CourseCardComponent
} from './entities';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
