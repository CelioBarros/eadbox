import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  
  @Input() course: any;

  constructor() { }

  ngOnInit() {
  	console.log(this.course);
  }

  price(isPaid, price) {
  	if (isPaid) {
  		const value = parseFloat(price).toFixed(2).toString().replace(".", ",");
		return `R$ ${value}`;
  	} else {
  		return "GRÁTIS";
  	}
  }

}
