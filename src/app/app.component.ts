import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  myform:any;

  ngOnInit(){
    this.myform = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(){
    localStorage.setItem("formdata",JSON.stringify(this.myform.value));
  }
}