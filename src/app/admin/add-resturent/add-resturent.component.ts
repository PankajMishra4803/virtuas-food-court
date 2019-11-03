import { ResturentDetails } from './../../shared/models/resturentDetails';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-resturent',
  templateUrl: './add-resturent.component.html',
  styleUrls: ['./add-resturent.component.css']
})
export class AddResturentComponent implements OnInit {
  resturentForm: ResturentDetails = {
    categoryOFResturent: '',
    returentName: '',
    resturentImage: '',
    costPerson: null,
    estimateTime: null,
    minPrice: null,
    startDate: null,
    readTemCondition: null,
  };
  constructor() { }

  ngOnInit() {
  }
  addResturentForm(resturentAddForm) { }
}
