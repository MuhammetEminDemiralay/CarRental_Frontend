import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../Services/auth.service";
import { inject } from "@angular/core";

export const exampleGuard : CanActivateFn  = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    let isAdmin = inject(AuthService).isAdmin();
    console.log("ADMİN BEY DİYECEKSİNİZ.");

    return isAdmin ? true : false;
}