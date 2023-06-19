import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Models/car';
import { CarService } from 'src/app/Services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  
  constructor(private carService : CarService, private activatedRoute : ActivatedRoute){}
  



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getByBrandCategory(params["brandId"])
      }else{
        this.getCars();
      }
    })
    this.getCars();
  }

  cars : Car[] = []

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

  getByBrandCategory(brandId : number){
     this.carService.getByBrandCategory(brandId).subscribe(response => {
      this.cars = response.data;
      
      
     })
  }
  

}
