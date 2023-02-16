import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }
  signUp() {
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      alert("Registration Successfull");
      this.signupForm.reset();
      this.router.navigate(['login'])
    })
  }
  get name() { return this.signupForm.get('name') }
  get mobile(){ return this.signupForm.get('mobile')}
   get email() { return this.signupForm.get('email') }
    get password() { return this.signupForm.get('password') }

}
