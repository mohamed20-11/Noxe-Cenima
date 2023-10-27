import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  Session:any;
  MyModel='';

  // ShowData()
  // {
  //   let data:any=localStorage.getItem('Session');
  //   this.Session=JSON.parse(data);
  //   console.log(data)
  // }
}
