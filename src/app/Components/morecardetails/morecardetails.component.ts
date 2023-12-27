import { Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
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
  

  constructor(private router : Router, 
              private carImageService :CarİmageService, 
              private authService : AuthService, 
              private carDetailService : CardetailService, 
              private activatedRoute : ActivatedRoute,
              private elementRef : ElementRef,
              private renderer : Renderer2){}

  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params =>{
    this.carId = params["carId"];
    if(params["carId"]){
      this.getMoreCarDetails(params["carId"])
      this.getCarImagesByCarId(params["carId"])
    }
   })
   this.authService.getUser();
   this.getCars();
   if(localStorage.getItem("_token") == null){
    this.isActive = true;
   }  
  }

  carDetails : CarDetail[] = [];
  imageUrl = "https://localhost:44313/";
  noPhotoUrl = "Images/cd7f46b67a054b8992f3a4488e8d7347.png"
  carImagePaths: CarImage[] = [];
  car : Car;
  carId : number;
  isActive : boolean = false;
  imageIndex : number = 0;
  carImage : CarImage;
  @ViewChild("carousel", {static:true}) _carousel : ElementRef;

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

  isAdmin(){
   return this.authService.isAdmin();
  }
  
  isAuthenticated(){
    return this.authService.loggedIn();
  }

  left(){
    if(this.carImagePaths.length == 0){
      return;
    }else{
      if(this.imageIndex == (this.carImagePaths.length)){
        this.imageIndex = 1;
      }else{
        this._carousel.nativeElement.style.transform = `translate(-${this.imageIndex * 100}%)`
        this.imageIndex += 1;
        console.log(this.imageIndex);
      }
    }
  }

  right(){
    if(this.carImagePaths.length == 0){
      return;
    }else{
      if(this.imageIndex > 0){
        this.imageIndex -= 1;
        this._carousel.nativeElement.style.transform = `translate(-${this.imageIndex * 100}%)`;
        console.log(this.imageIndex);
      }else{
        this.imageIndex = this.carImagePaths.length;
      }
    }
  }
  
  imageDelete(){
    this.carImagePaths.forEach((item, index) => {
       if(index === this.imageIndex){
        this.carImage = item;
       }  
    })
    if(window.confirm("Are you sure"))
     this.carImageService.imageDelete(this.carImage).subscribe(response => {
       window.location.reload();
    })
  }
}
