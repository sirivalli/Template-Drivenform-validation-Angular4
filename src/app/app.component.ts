import { NgModule,Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';
class Signup {
  constructor(public firstName:string = '',
              public lastName:string = '',
              public address:string = '',
              public city:string = '',
              public state:string = '',
              public zip:string = '',
              public email:string = '',
              public password:string = '',
              public conformpassword:string = '',
              public gender:string = '',
              public martialStatus:string = '',
              public language:string = '') {
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  model: Signup = new Signup();
  @ViewChild('f') form: any;
  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(this.form.value);
      
    }
  }
  ngOnInit() {
  }
}
