import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
              private toastrService : ToastrService
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
    console.log(this.userPasswordForm)
  }

  updateUser(){
    let userEditModel = Object.assign({}, this.userEditForm.value);
    this.userService.userUpdate(userEditModel).subscribe(response => {
      this.toastrService.success("Durumu", "Başarılı");
    })
  }

  updatePassword(){
    let userChangeModel = Object.assign({}, this.userPasswordForm.value);
    console.log(userChangeModel);
    
    this.userService.userPasswordUpdate(userChangeModel).subscribe(response => {
      console.log(response.message);
    }) 
  }


}
