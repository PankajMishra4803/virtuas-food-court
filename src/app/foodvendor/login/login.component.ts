import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    userName: '',
    passWord: '',
    isAdmin: null
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmitloginForm(loginForm) { }
}
