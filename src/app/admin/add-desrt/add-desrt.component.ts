import { Desert } from './../../shared/models/desert';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-desrt',
  templateUrl: './add-desrt.component.html',
  styleUrls: ['./add-desrt.component.css']
})
export class AddDesrtComponent implements OnInit {
  desertForm: Desert = {
    categoryOFDesert: '',
    desertName: '',
    desertPrice: null,
    creatDate: null
  };
  constructor() { }

  ngOnInit() {
  }
  onAddDesrt(desrtForm) { }
}
