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
    console.log(this.user);
    
  }

  user : User;
  userEditForm : FormGroup;

  createUserEditForm(){
    this.userEditForm = this.formBuilder.group({
      email : ["", Validators.required],
      firstname : ["", Validators.required],
      lastname : ["", Validators.required]
    })
  }

  updateUser(){
    let userEditModel = Object.assign({}, this.userEditForm.value);
    let model = <User>{

    }
    this.userService.userUpdate(userEditModel).subscribe(response => {
      this.toastrService.success("Durumu", "Başarılı");
    })
  }



}
