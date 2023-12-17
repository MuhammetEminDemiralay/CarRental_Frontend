import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/Models/carDetail';
import { CarImage } from 'src/app/Models/carİmage';
import { AuthService } from 'src/app/Services/auth.service';
import { CardetailService } from 'src/app/Services/cardetail.service';
import { CarİmageService } from 'src/app/Services/cari̇mage.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailsComponent implements OnInit{
  
  constructor(private authService : AuthService, 
              private carİmagesService : CarİmageService, 
              private carDetailService : CardetailService, 
              private activatedRoute : ActivatedRoute,
              private router : Router){
              }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {      
      if(params["brandId"]){
        this.getCarsDetailsBrand(params["brandId"]);
      }else if(params["colorId"]){
        this.getCarsDetailColor(params["colorId"])
      }else if(params["statuId"]){
        if(params["statuId"] == 1){
          this.getCarDetails();
        }else if(params["statuId"] == 2){
          this.getCarDetailsStatu();
        }
      }
        else{
        this.getCarDetails();
      }
    })
    this.authService.getUser();
  }

  carDetails : CarDetail[] = [];
  imageUrl = "https://localhost:44313/";
  noPhotoUrl = "Images/998defad5f0441dc8b17c0979b53fccb.jpg"
  searchKey : string;
  filterCarDetails : CarDetail[] = [];

  getCarDetails(){
    this.carDetailService.getCarsDetail().subscribe(response => {
      this.carDetails = response.data;    
    })
  }

  getCarDetailsStatu(){
   this.carDetailService.getCarsDetail().subscribe(response => {
    this.carDetails = response.data.filter(p => p.isRentable === true)
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

  searchListen(e : any){
    this.searchKey = e.target.value;
    if(this.searchKey == ""){
      this.filterCarDetails = undefined;
      this.search();
    } 
  }

  search(){
    this.filterCarDetails = [];
    this.carDetails.forEach(item => {
      if(item.brandName.includes(this.searchKey) || item.model.includes(this.searchKey)){
        if(this.searchKey != ""){
          this.filterCarDetails.push(item);
        }
      }
    })
  }


}
