import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../AuthService.service';
import { LoginRequest } from '../LoginRequest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin:FormGroup;
  loginRequestPayload:LoginRequest;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(){
    this.formLogin = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.loginRequestPayload = {
      username: '',
      password: ''
    }
  }

  login(){
    console.log(this.formLogin.value);
    
    this.loginRequestPayload.password = this.formLogin.value.password;
    this.loginRequestPayload.username = this.formLogin.value.username;

    this.authService.login(this.loginRequestPayload).subscribe(data => { console.log(data);
    console.log("navigate to home");
    
    this.router.navigateByUrl('/');
    });
  }

}