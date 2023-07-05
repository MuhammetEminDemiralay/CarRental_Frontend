import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  constructor(private authService : AuthService,
              private formBuilder : FormBuilder,
              private localStorageService : LocalStorageService){}

  registerForm : FormGroup;

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      email : ["", Validators.required],
      password : ["", Validators.required],
      firstName: ["", Validators.required],
      lastName : ["", Validators.required]
    })
  }
  

  register(){
    if(this.registerForm.valid){
    let model = Object.assign({}, this.registerForm.value);
    this.authService.register(model).subscribe(response => {
      this.localStorageService.setToken(response.data.token);
      this.registerForm.reset();
      this.authService.getUser()                     
    })
    }
  }

}
