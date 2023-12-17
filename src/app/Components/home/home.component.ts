import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
user : any = [
  {id : 1, name : "Muhammet"},
  {id : 2, name : "Ali"},
  {id : 3, name : "Duygu"},
  {id : 4, name : "Ayşenur"}
]

}
