import { HttpClient } from "@angular/common/http";
import { SignupRequest } from "./SignupRequest.model";
import { Observable, map } from "rxjs";
import { Injectable, OnInit } from "@angular/core";
import { LoginRequest } from "./LoginRequest.model";
import { LoginResponse } from "./LoginResponse.model";
import { LocalStorageService } from "ngx-webstorage";

@Injectable()
export class AuthService implements OnInit{

    loginResponse:LoginResponse;

    constructor(private http:HttpClient,private localStorage:LocalStorageService) {
        this.loginResponse = {
            jwt: '',
            exp: new Date(),
            refreshToken: '',
            username: ''
        }
    }

    baseUrl:string = 'http://localhost:8080/api/auth';

    ngOnInit(){}

    register(signupRequestPayload:SignupRequest): Observable<any>{
        return this.http.post(this.baseUrl + '/signup', signupRequestPayload);
    }

    login(loginRequestPayload:LoginRequest): Observable<any>{
        
        return this.http.post<LoginResponse>(this.baseUrl + '/login', loginRequestPayload).pipe(
            map(data => {
                this.localStorage.store('jwt',data.jwt);
                this.localStorage.store('exp',data.exp);
                this.localStorage.store('refreshToken',data.refreshToken);
                this.localStorage.store('username',data.username);
            })
        )
    }

    getJwtToken():String{
        console.log(this.localStorage.retrieve('jwt'));
        
        return this.localStorage.retrieve('jwt');
    }

    isLoggedIn():boolean{
        return this.getJwtToken() != null;
    }
}