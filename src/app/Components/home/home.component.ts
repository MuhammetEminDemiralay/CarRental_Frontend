import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  persons : any = [
    {id : 5, name : "Muhammet"},
    {id : 6, name : "Ali"},
    {id : 7, name : "Duygu"},
    {id : 8, name : "Ayşenur"}
  ]
  myData : boolean = true;
  animationDuration : number = 0

  

}
