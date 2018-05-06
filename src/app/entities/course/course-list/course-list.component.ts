import { Component, OnInit, Input } from '@angular/core';
import { CourseService, CategoryService } from '../../../services';
@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses = [];
  @Input() category_slug;

  constructor(
  	private courseService: CourseService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    if (this.category_slug) {
      this.fetchCategoryCourses();
    } else {
      this.fetchCourses();
    }
  }

  fetchCourses() {
  	this.courseService.fetchCourses().subscribe(response => {
  		this.courses = response;
  	});
  }

  fetchCategoryCourses() {
    this.categoryService.fetchCategoriesCourses(this.category_slug).subscribe(response => {
      this.courses = response;
    });
  }

}
