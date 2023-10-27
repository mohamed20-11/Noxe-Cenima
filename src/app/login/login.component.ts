import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router , private _AuthService:AuthService)
  {}
  userData={};
  email:string='';
password:string='';


  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required, Validators.email]),
    password:new FormControl(null,[Validators.required, Validators.minLength(8)]),

  });

 data:any=localStorage.getItem('Session');
  LogSession:any=JSON.parse(this.data);


  onSubmit(loginForm:FormGroup)
  {
    console.log(`Data is ${this.LogSession.password}`)
    // console.log(this.LogSession)
    // console.log(this.password);
    // console.log(this.email);



    if (this.email === this.LogSession.email && this.password ===this.LogSession.password) {
      this.router.navigateByUrl("/movies");
      localStorage.setItem('token',JSON.stringify(this.LogSession));
      let token = JSON.stringify(localStorage.getItem('token'));
      this.userData=token;
      this._AuthService.saveUserData();

      // console.log(`Token IS ${token}`);
      // alert("Logged In")

    } else {
      // this.router.navigate(['/movies'])

      // The user is not logged in successfully.
      // Show an error message to the user.
      alert('Invalid email or password');
      // this.router.navigate(['/home']);
    }
  }
  ngOnInit() {
    if(this._AuthService.userData.getValue()!=null){
      this.router.navigateByUrl("/movies");
    }
  }
}
