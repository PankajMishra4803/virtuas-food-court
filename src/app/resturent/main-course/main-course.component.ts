import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-course',
  templateUrl: './main-course.component.html',
  styleUrls: ['./main-course.component.css']
})
export class MainCourseComponent implements OnInit {
  step = 0;
  constructor() { }

  ngOnInit() {
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
