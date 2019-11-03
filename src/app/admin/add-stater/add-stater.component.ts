import { StarterMenuCourse } from './../../shared/models/starterMenuCourse';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-stater',
  templateUrl: './add-stater.component.html',
  styleUrls: ['./add-stater.component.css']
})
export class AddStaterComponent implements OnInit {
  startCourseForm: StarterMenuCourse = {
    categoryOFStarter: '',
    nameOFStarter: '',
    priceOfStarter: '',
    createDate: null
  };
  constructor() { }

  ngOnInit() {
  }
  addCourseCourse(starterForm: NgForm) {
    console.log(starterForm);
  }
}
