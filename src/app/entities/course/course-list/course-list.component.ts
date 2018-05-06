import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services';
@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses = [];

  constructor(
  	private courseService: CourseService
  ) { }

  ngOnInit() {
  	this.fetchCourses();
  }

  fetchCourses() {
  	this.courseService.fetchCourses().subscribe(response => {
  		this.courses = response;
  		console.log(this.courses);
  	}, error => {
  		console.log(error);
  	});
  }

}
