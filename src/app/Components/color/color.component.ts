import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/app/Models/color';
import { AuthService } from 'src/app/Services/auth.service';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  
  constructor(private colorService : ColorService, 
              private authService : AuthService,
              private router : Router){}

  ngOnInit(): void {
    this.getColors();
  }

  colorId : number;

  colors : Color[] = [];
  currentColor : Color;

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  setCurrentColor(color : Color){
    this.currentColor = color;
    this.colorId = color.id;
  }

  unloadColor : Color;
  getClearCurrentColor(){
    this.currentColor = this.unloadColor;
  }

  deleteColor(color : Color){
    if(window.confirm("Are you sure...")){
    this.colorService.deleteColor(color).subscribe(response => {
      window.location.reload();
    })
  }
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isActive(color : Color){
    if(!this.isAdmin()){
      if(color == this.currentColor){
        return "active";
      }
    }
    return "";
  }

  notActive(){
    this.currentColor = null;
  }

  allColors(){
    this.currentColor = null;
    this.router.navigate(["/cardetails"])
  }
}
