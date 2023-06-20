import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/Models/carDetail';
import { CardetailService } from 'src/app/Services/cardetail.service';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CarDetailsComponent implements OnInit{
  
  constructor(private carDetailService : CardetailService, private activatedRoute : ActivatedRoute){}
  
  ngOnInit(): void {
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

}
