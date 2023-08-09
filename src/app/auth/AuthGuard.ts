import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./AuthService.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate {
    isLoggedin = false;
    constructor(private authService:AuthService,private router:Router){}



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        this.isLoggedin = this.authService.isLoggedIn();
        if(this.isLoggedin){

            console.log(this.isLoggedin);
            
            console.log("User is logged in");
            
            return true;
        }else{
            console.log(this.isLoggedin);
            
            console.log("User is not logged in");
            this.router.navigate(['/login']);
            return false;
        }
    }

}