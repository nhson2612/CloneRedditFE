import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupRequest } from '../SignupRequest.model';
import { AuthService } from '../AuthService.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignup:FormGroup;
  signupRequestPayload:SignupRequest;

  constructor(private authService:AuthService) { 
    this.signupRequestPayload = {
      email: '',
      password: '',
      username: ''
    }
  }

  ngOnInit() {
    this.formSignup = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required]}),
      username: new FormControl(null, {validators: [Validators.required]}),
    });
  }

  register(){
    this.signupRequestPayload.email = this.formSignup.value.email;
    this.signupRequestPayload.password = this.formSignup.value.password;
    this.signupRequestPayload.username = this.formSignup.value.username;
    console.log(this.signupRequestPayload);
    
    this.authService.register(this.signupRequestPayload).subscribe(data => {
      
    });
    
  }

}
