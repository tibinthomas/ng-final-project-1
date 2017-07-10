import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const pass = form.value.password;
  }

  ngOnInit() {
  }

}
