import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../Services/auth.service";
import { inject } from "@angular/core";

const adminGuard : CanActivateFn  = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    let isAdmin = inject(AuthService).isAdmin();

    return isAdmin ? true : false;
}


const profilGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    
    let isUser = inject(AuthService).loggedIn();
    let isAdmin = inject(AuthService).isAdmin();

    return isUser || isAdmin ? true : false; 
}




export {adminGuard, profilGuard}