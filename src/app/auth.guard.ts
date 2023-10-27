import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardComponent implements CanActivate {

  constructor(private _AuthService: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._AuthService.userData.getValue()!=null) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
