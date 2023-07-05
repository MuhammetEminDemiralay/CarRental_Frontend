import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private authService : AuthService,
              private formBuilder : FormBuilder,
              private localStorageService : LocalStorageService,
              private router : Router){}

  ngOnInit(): void {
    this.createLoginForm();
  }


  
  loginForm : FormGroup;

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email : ["", Validators.required],
      password : ["", Validators.required]
    })
  }


  login(){
    if(this.loginForm.valid){
      let model = Object.assign({}, this.loginForm.value);
      this.authService.login(model).subscribe(response => {
        this.localStorageService.setToken(response.data.token);
        this.authService.getUser()
       
       
        this.router.navigate(["cardetails"])
      })
    }
  }




}
