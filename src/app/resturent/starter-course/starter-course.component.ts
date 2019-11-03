import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter-course',
  templateUrl: './starter-course.component.html',
  styleUrls: ['./starter-course.component.css']
})
export class StarterCourseComponent implements OnInit {

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
