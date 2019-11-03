import { UserInfoComponent } from './../../shared/dialogcomponent/user-info/user-info.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
 continueToPayment():void {
  const dialogRef = this.dialog.open(UserInfoComponent, {
    width: '750px',
    data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}
}
