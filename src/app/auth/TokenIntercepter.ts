import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { LocalStorageService } from "ngx-webstorage";
import { Observable } from "rxjs";
import { AuthService } from "./AuthService.service";
import { Injectable } from "@angular/core";


@Injectable()

export class TokenIntercepter implements HttpInterceptor {

    constructor(private localStorage:LocalStorageService,private authService:AuthService) {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwtToken = this.authService.getJwtToken();        
        if(jwtToken!=null){
            console.log("jwtToken",jwtToken);
            const authReq = req.clone({
                headers : req.headers.set('Authorization','Bearer ' + jwtToken)
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }

}