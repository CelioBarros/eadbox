import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { 
  CourseListComponent,
  CourseCardComponent,
  CourseComponent
} from './entities';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatListModule,
  MatCardModule,
  MatDividerModule,
  MatTabsModule
} from '@angular/material';

import {
  CourseService,
  CategoryService
} from './services';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseCardComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    CourseService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
