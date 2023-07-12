import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/Models/car';
import { RentModel } from 'src/app/Models/rentModel';
import { AuthService } from 'src/app/Services/auth.service';
import { CardetailService } from 'src/app/Services/cardetail.service';
import { RentService } from 'src/app/Services/rent.service';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrls: ['./rentcar.component.css']
})
export class RentcarComponent implements OnInit{

  constructor(private router : Router, private carDetailService : CardetailService, private rentService : RentService ,private formBuilder : FormBuilder, private authService : AuthService, private activatedRoute : ActivatedRoute){}  

  ngOnInit(): void {
    this.minDate = new Date().toISOString().split("T")[0]
    this.createRentForms();
    this.getCarId();
    this.getCarPrice();
    
  }

  minDate:string="";
  rentForms : FormGroup;
  carId : number;
  

  createRentForms(){
    this.rentForms = this.formBuilder.group({
      rentDate : ["", Validators.required],
      returnDate : ["", Validators.required]
    })
  }

  getCarId(){
    this.activatedRoute.params.subscribe(params => {
      this.carId = params["carId"];
    })
  }

  dailyPrice : number;

  getCarPrice(){
    this.carDetailService.getCarCarId(this.carId).subscribe(response => {
      this.dailyPrice= response.data.dailyPrice
    }
  )}
  
  

  rent(){
    let rentModel = Object.assign({}, this.rentForms.value);

    let endDate = new Date(rentModel.returnDate);
    let startDate = new Date(rentModel.rentDate);
    let totalAmount = this.totalPrice(endDate, startDate);  
    this.router.navigate(['payment', {price : totalAmount}])
    
    let model = <RentModel>{
      rentDate : startDate,
      returnDate : endDate,
      userId : this.authService.user.userId,
      carId : this.carId
    }

    this.rentService.rentAdd(model).subscribe(response => {
    })
  }


  totalPrice(endDate : Date, startDate : Date){
    const time = endDate.getTime() - startDate.getTime();
    const day =  Math.floor(time / (1000 * 60 * 60 * 24));
    let rentDay = day + 1;
    let price = rentDay * this.dailyPrice;
    console.log(price);
    
    return price;
  }


}
