import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{BehaviorSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any=new BehaviorSubject(null);

  constructor(private _router:Router) {
    if(localStorage.getItem('token') !=null)
    {
      this.saveUserData();
    }
  }
  saveUserData()
  {
    let userToken=localStorage.getItem('token');
    this.userData.next(userToken);
  }
  signOut()
  {
    localStorage.removeItem('token');
    this.userData.next(null);
    this._router.navigate(['/login'])
  }
}
