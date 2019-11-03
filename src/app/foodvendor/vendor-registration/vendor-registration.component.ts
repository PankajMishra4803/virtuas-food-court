import { UserServiceService } from './../../services/user-service.service';
import { UserRegistration } from './../../shared/models/userRegistration';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vendor-registration',
  templateUrl: './vendor-registration.component.html',
  styleUrls: ['./vendor-registration.component.css']
})
export class VendorRegistrationComponent implements OnInit {
  userRegistration: UserRegistration = {
    userName: '',
    email: '',
    mobileNumber: '',
    isAdmin: null
  };
  constructor(private userServiceService: UserServiceService) { }

  ngOnInit() {
  }
  onSubmitRegistration(registrationForm: NgForm) {
    // this.userServiceService.postUserRegistrationForm(this.userRegistration).subscribe(
    //   result => console.log('result', result),
    //   error => console.log('eror', error)
    // );
  }
}
