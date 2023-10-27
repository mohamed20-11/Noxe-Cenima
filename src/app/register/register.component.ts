import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Session:any;
  constructor(private _router:Router){}
  registerForm:FormGroup=new FormGroup({
    First_name:new FormControl(null, [Validators.minLength(3) , Validators.required , Validators.maxLength(16),Validators.pattern(/^[a-zA-Z]/)]),
    Last_name:new FormControl(null, [Validators.minLength(3) , Validators.required , Validators.maxLength(12)]),
    email:new FormControl(null,[Validators.required, Validators.email]),
    age:new FormControl(null,[Validators.required, Validators.max(100), Validators.min(18)]),
    // username:new FormControl(null,Validators.required),
    password:new FormControl(null,[Validators.required, Validators.pattern(/^[a-z]/), Validators.minLength(8)]),

  });
  submitRgForm(registerForm:FormGroup)
  {
    console.log(registerForm.value);
    localStorage.setItem('Session',JSON.stringify(registerForm.value));
    this._router.navigate(['home']);
  }




}



/**
 * password confirmation
 * confirmPassword: new FormControl(null, [
  Validators.required,
  Validators.minLength(8),
  Validators.pattern(/^[A-Z].+$/),
  (password: string) => {
    return password === this.password.value;
  }
]);
 */
