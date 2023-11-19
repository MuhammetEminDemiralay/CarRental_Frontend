import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  products = [
    {productName : "A", cevap : true},
    {productName : "B", cevap : false},
    {productName : "C", cevap : true},
    {productName : "D", cevap : false},
    {productName : "E", cevap : true},
    {productName : "F", cevap : false},
  ]

}
