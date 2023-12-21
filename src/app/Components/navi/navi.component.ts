import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{

  constructor(private authService : AuthService,
              private renderer : Renderer2,
              private router : Router
              ){}

  ngOnInit(): void {
    if(localStorage.getItem("_token")){
      this.user = this.authService.getUser().userName.split(" ");
    }
  }
  
  active : boolean = false;
  @ViewChild('menu') menu : ElementRef; 
  user : string[];

  isAuthentication(){
    return this.authService.loggedIn();
  }

  logOut(){
    localStorage.removeItem("_token");
    this.router.navigate(["cardetails"]);
    this.user = [];
  }

  dropdown(){
    if(!this.active){
      this.renderer.addClass(this.menu.nativeElement, "active")
      this.active = true;
    }else{
      this.renderer.removeClass(this.menu.nativeElement, "active")
      this.active = false;
    }
  }


}
