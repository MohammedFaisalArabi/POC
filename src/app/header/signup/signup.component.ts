import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      Email:[''],
      Password:[''],
      RepeatPassword:['']
    })    
  }

  usrSignup() {    
    console.log(this.createForm.value)
    localStorage.setItem('UserSignUp',JSON.stringify(this.createForm.value));
  }
}
