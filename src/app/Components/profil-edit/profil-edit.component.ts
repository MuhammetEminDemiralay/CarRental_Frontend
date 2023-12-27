import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.css']
})
export class ProfilEditComponent implements OnInit{
  constructor(private authService : AuthService,
              private formBuilder : FormBuilder,
              private userService : UserService,
              private toastrService : ToastrService,
              private router : Router
              ){}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.createUserEditForm(); 
    this.createPasswordForm();
  }

  user : User;
  userEditForm : FormGroup;
  userPasswordForm : FormGroup;

  createUserEditForm(){
    this.userEditForm = this.formBuilder.group({
      email : ["", Validators.required],
      firstname : ["", Validators.required],
      lastname : ["", Validators.required]
    })
  }

  createPasswordForm(){
    this.userPasswordForm = this.formBuilder.group({
      email: [this.user.email],
      oldPassword : ["", Validators.required],
      newPassword : ["", Validators.required],
    })
  }

  updateUser(){
    let userEditModel = Object.assign({}, this.userEditForm.value);
    this.userService.userUpdate(userEditModel).subscribe(response => {
      if(response.success){
        this.toastrService.success(`${response.message}`, "Success");
      }
      this.authService.logOut();
      this.router.navigate(["login"])
    })
  }

  updatePassword(){
    let userChangeModel = Object.assign({}, this.userPasswordForm.value);    
    this.userService.userPasswordUpdate(userChangeModel).subscribe(response => {
      if((response.success)){
        this.toastrService.success(`${response.message}`, "Success")
      }
      this.authService.logOut();
      this.router.navigate(["login"])
    })
  }


}
