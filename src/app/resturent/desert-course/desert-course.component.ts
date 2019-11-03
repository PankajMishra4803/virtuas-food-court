import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-desert-course',
  templateUrl: './desert-course.component.html',
  styleUrls: ['./desert-course.component.css']
})
export class DesertCourseComponent implements OnInit {
  step = 0;
  message:string;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  addItemInCart(){
    this.message="hello this is child";
    this.messageEvent.emit(this.message);
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
