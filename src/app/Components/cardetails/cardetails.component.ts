import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/Models/carDetail';
import { CarImage } from 'src/app/Models/carİmage';
import { AuthService } from 'src/app/Services/auth.service';
import { CardetailService } from 'src/app/Services/cardetail.service';
import { CarİmageService } from 'src/app/Services/cari̇mage.service';


@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailsComponent implements OnInit{
  
  constructor(private authService : AuthService ,private carİmagesService : CarİmageService, private carDetailService : CardetailService, private activatedRoute : ActivatedRoute){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsDetailsBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarsDetailColor(params["colorId"])
      }else{
        this.getCarDetails();
      }
    })
    this.authService.getUser();
  }

  carDetails : CarDetail[] = [];
  imageUrl = "https://localhost:44313/"

  getCarDetails(){
    this.carDetailService.getCarsDetail().subscribe(response => {
      this.carDetails = response.data;
      
    })
  }


  getCarsDetailsBrand(brandId : number){
    this.carDetailService.getCarDetailBrand(brandId).subscribe(response => {
      this.carDetails = response.data;
    })
  }


  getCarsDetailColor(colorId : number){
    this.carDetailService.getCarDetailColor(colorId).subscribe(response => {
      this.carDetails = response.data;
    })
  }


  isAdmin(){
    return this.authService.isAdmin()
  }


}
