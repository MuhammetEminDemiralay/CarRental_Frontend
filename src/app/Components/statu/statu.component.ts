import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statu',
  templateUrl: './statu.component.html',
  styleUrls: ['./statu.component.css']
})
export class StatuComponent implements OnInit{
  
  constructor(){
  }

  ngOnInit(): void {
    
  }

  currentStatu : any;

  status : any[] = [
    {statuId : 1, statuName : "All"},
    {statuId : 2, statuName : "Only Rentable"}
  ]

  getCurrentStatuClass(statu : any){
      return this.currentStatu == statu ? "active" : "not-active"
  }

  setCurrentStatu(statu : any){
    this.currentStatu = statu;
  }


}
