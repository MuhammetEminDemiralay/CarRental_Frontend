import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/Models/carDetail';
import { AuthService } from 'src/app/Services/auth.service';
import { CardetailService } from 'src/app/Services/cardetail.service';

@Component({
  selector: 'app-morecardetails',
  templateUrl: './morecardetails.component.html',
  styleUrls: ['./morecardetails.component.css']
})
export class MorecardetailsComponent implements OnInit{
  

  constructor(private authService : AuthService, private carDetailService : CardetailService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params =>{
    if(params["carId"]){
      this.getMoreCarDetails(params["carId"])
    }
   })

   this.authService.getUser();
  }

  carDetails : CarDetail[];
  imageUrl = "https://localhost:44313/"

  getMoreCarDetails(carId : CarDetail){
    this.carDetailService.getMoreCarDetails(carId).subscribe(response => {
      this.carDetails = response.data 
    })
  }

  isAdmin(){
   return this.authService.isAdmin();
  }
  

  isAuthenticated(){
    return this.authService.loggedIn();
  }

}
