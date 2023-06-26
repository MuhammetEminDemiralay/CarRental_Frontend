import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/Models/carDetail';
import { CarImage } from 'src/app/Models/carİmage';
import { CardetailService } from 'src/app/Services/cardetail.service';
import { CarİmageService } from 'src/app/Services/cari̇mage.service';


@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailsComponent implements OnInit{
  
  constructor(private carİmagesService : CarİmageService, private carDetailService : CardetailService, private activatedRoute : ActivatedRoute){}
  
  ngOnInit(): void {
    this.getCarİmages();
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsDetailsBrand(params["brandId"]);
      }else{
        this.getCarDetails();
      }
    })
  }

  carDetails : CarDetail[] = [];

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

  images : CarImage[] = [];
  imageUrl = "https://localhost:44313/"

  getCarİmages(){
    this.carİmagesService.getAllİmages().subscribe(response => {
      this.images = response.data;
    })
  }


  getİmagesByCarId(carId : number){
    this.carİmagesService.getImagesByCarId(carId).subscribe(response => {
      this.images = response.data;
    })
  }


  


}