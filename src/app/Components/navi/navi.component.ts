import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{

  constructor(private authService : AuthService,
              private renderer : Renderer2  
              ){}

  ngOnInit(): void {
  }
  
  active : boolean = false;
  @ViewChild('menu') menu : ElementRef; 

  isAuthentication(){
    return this.authService.loggedIn();
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

  logOut(){
    localStorage.removeItem("_token");
  }

}
