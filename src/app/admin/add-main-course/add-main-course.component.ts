import { MainCourseMenu } from './../../shared/models/mainCourseMenu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-main-course',
  templateUrl: './add-main-course.component.html',
  styleUrls: ['./add-main-course.component.css']
})
export class AddMainCourseComponent implements OnInit {
  mainCourseMenuForm: MainCourseMenu = {
    categoryOfMainCourceMenu: '',
    mainCourseMenuName: '',
    mainCourseMenuPrice: '',
    isVeg: null,
    isNonVeg: null,
    mainCourseMenuCreatedDate: null
  };
  constructor() { }

  ngOnInit() {
  }
  addMainCourse(mainCourseForm) { }
}
