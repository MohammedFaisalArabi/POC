import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createForm!: FormGroup;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formbuilder.group({
      UserName:[''],
      Password:['']
    })
  }

  usrLogin(){
    console.log(this.createForm.value)
    localStorage.setItem('UserLogin',JSON.stringify(this.createForm.value));
  }

}
