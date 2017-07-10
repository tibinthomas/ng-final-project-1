import { NgForm } from '@angular/forms/src/directives';
import { Params } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.signinUser(email, pass);
  }

  ngOnInit() {
  }

}
