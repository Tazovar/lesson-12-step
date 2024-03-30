import { Injectable } from "@angular/core";

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'
import { AuthService } from "src/app/views/services/auth.service";


@Injectable({
    providedIn:'root'
})

export class UnAuthGuard implements CanActivate{
    constructor(private authservice:AuthService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if(!this.authservice.isAuth()){
        return true
   }else{
this.router.navigate(['/main'])
    return false;
}
    }
}