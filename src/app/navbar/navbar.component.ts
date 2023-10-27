import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthServ:AuthService){}
  isLogged:boolean=false


  ngOnInit():void {
    this._AuthServ.userData.subscribe({
      next :()=>{
        if(this._AuthServ.userData.getValue() !=null)
        {
          this.isLogged=true;
        }
        else
        {
          this.isLogged=false;
        }
      }
    })
  }


  LogoutFun()
  {
    this._AuthServ.signOut()
  }

}
