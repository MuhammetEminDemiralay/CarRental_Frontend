import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/Models/color';
import { AuthService } from 'src/app/Services/auth.service';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  
  constructor(private colorService : ColorService, private authService : AuthService){}

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

  getCurrentColorClass(color : Color){
    if(this.currentColor == color){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  setCurrentColor(color : Color){
    this.currentColor = color;
    this.colorId = color.id;
  }

  getAllColors(){
    if(!this.currentColor){
      return  "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  unloadColor : Color;
  getClearCurrentColor(){
    this.currentColor = this.unloadColor;
  }

  deleteColor(color : Color){
    this.colorService.deleteColor(color).subscribe(response => {
      window.location.reload();
    })
  }

  isAdmin(){
    return this.authService.isAdmin();
  }
}
