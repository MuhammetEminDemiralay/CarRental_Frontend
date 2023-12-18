import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-statu',
  templateUrl: './statu.component.html',
  styleUrls: ['./statu.component.css']
})
export class StatuComponent implements OnInit{
  
  constructor(private authService : AuthService,
              private router : Router){
  }

  ngOnInit(): void {
    
  }

  currentStatu : any;

  status : any[] = [
    {statuId : 1, statuName : "All"},
    {statuId : 2, statuName : "Only Rentable"}
  ]

  setCurrentStatu(statu : any){
    this.currentStatu = statu;
  }

  isActive(statu : any){
      if(statu == this.currentStatu){
        return "active";
      }else{
        return  "";
      }
  }

  notActive(){
    this.currentStatu = null;
  }

  allStatu(){
    this.currentStatu = null;
    this.router.navigate(["/cardetails"])
  }
}
