import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    {img:'assets/images/south-thali.jpg'},
    {img:'assets/images/Bengali-food.jpg'},
    {img:'assets/images/mumbai-thali.jpg'}
  ];
  showNavigationArrows = true;
  constructor() { }
  ngOnInit() {}


}
