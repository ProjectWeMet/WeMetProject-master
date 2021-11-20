import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterseptor implements HttpInterceptor{
    //interceptor --> create folder in the app module , inside this folder , create a file for the interceptor 
//هاد بفيدني اني اعدل ع الداتا اللي رح يبعثها اليوزر  
// using this Interceptor to edit the request from the user and add the Authorization in the header of this request
// this Authorization include the Bearer and the token 
//and then return the new request , which is next.handle of the request 
// you can give the value of the token from the local storge ... I saved it with the name 'token'
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent<any>>{
        const token=localStorage.getItem('token');
        req=req.clone({
            setHeaders:{
                Authorization:`Bearer ${token}`
            }
        });
        return next.handle(req);
    }
}
