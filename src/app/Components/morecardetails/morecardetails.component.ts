import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/Models/car';
import { CarDetail } from 'src/app/Models/carDetail';
import { CarImage } from 'src/app/Models/carİmage';
import { AuthService } from 'src/app/Services/auth.service';
import { CardetailService } from 'src/app/Services/cardetail.service';
import { CarİmageService } from 'src/app/Services/cari̇mage.service';

@Component({
  selector: 'app-morecardetails',
  templateUrl: './morecardetails.component.html',
  styleUrls: ['./morecardetails.component.css']
})
export class MorecardetailsComponent implements OnInit{
  

  constructor(private router : Router ,private carImageService :CarİmageService ,private authService : AuthService, private carDetailService : CardetailService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params =>{
    if(params["carId"]){
      this.getMoreCarDetails(params["carId"])
      this.getCarImagesByCarId(params["carId"])
    }
   })
   this.authService.getUser();
   this.getCars();
   
  }

  carDetails : CarDetail[] = [];
  imageUrl = "https://localhost:44313/"
  noPhotoUrl = "Images/998defad5f0441dc8b17c0979b53fccb.jpg"
  carImagePaths: CarImage[] = [];


  
  getMoreCarDetails(carId : CarDetail){
    this.carDetailService.getMoreCarDetails(carId).subscribe(response => {
      this.carDetails = response.data 
    })
  }

  getCarImagesByCarId(carId : number) {
    this.carImageService.getImagesByCarId(carId).subscribe(response => {
      this.carImagePaths = response.data.filter(p => p.imagePath);      
    })
  }

  car : Car;
  getCars(){
    this.activatedRoute.params.subscribe(params =>{
    let carId = params["carId"];
    this.carDetailService.getCarCarId(carId).subscribe(response => {
      this.car = response.data;
    })
    })
  }



  rentCarId(){
    this.activatedRoute.params.subscribe(params => {
      let carId = params["carId"];
      this.router.navigate(['rentcar', {carId : carId}])
    })
  }

  delete(){
    if(window.confirm("Are you sure")){
      this.carDetailService.delete(this.car).subscribe(response => {
        this.router.navigate(["cardetails"])      
        })
    }
  }

  update(){
    this.activatedRoute.params.subscribe(params =>{
      let carId = params["carId"];
      this.router.navigate(['updatecar', {carId : carId}])
    })
  }

  isAdmin(){
   return this.authService.isAdmin();
  }
  

  isAuthenticated(){
    return this.authService.loggedIn();
  }

  

}
