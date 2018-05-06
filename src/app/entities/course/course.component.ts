import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  categories = [{category_slug: null, title: "Todos os cursos"}];

  constructor(
  	private categoryService: CategoryService
  ) { }

  ngOnInit() {
  	this.fetchCategories();
  }

  fetchCategories() {
  	this.categoryService.fetchCategories().subscribe(response => {
  		this.categories = this.categories.concat(response);
  	});
  }

}
