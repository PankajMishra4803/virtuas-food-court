import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resturent-home',
  templateUrl: './resturent-home.component.html',
  styleUrls: ['./resturent-home.component.css']
})
export class ResturentHomeComponent implements OnInit {
  clickMessage:string;
  constructor() { }

  ngOnInit() {
  }

  getDataDesrtfromChild(event){
    console.log(event);
    this.clickMessage = 'event';
  }
}
