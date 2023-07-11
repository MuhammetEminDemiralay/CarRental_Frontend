import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RentModel } from 'src/app/Models/rentModel';
import { AuthService } from 'src/app/Services/auth.service';
import { RentService } from 'src/app/Services/rent.service';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.component.html',
  styleUrls: ['./rentcar.component.css']
})
export class RentcarComponent implements OnInit{

  constructor(private rentService : RentService ,private formBuilder : FormBuilder, private authService : AuthService, private activatedRoute : ActivatedRoute){}  

  ngOnInit(): void {
    this.minDate = new Date().toISOString().split("T")[0]
    this.createRentForms();
    this.getCarId();
    
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

  rent(){
    let rentModel = Object.assign({}, this.rentForms.value);
    let carId = this.activatedRoute.params.subscribe(params =>{this.carId = params["carId"]})
    let model = <RentModel>{
      rentDate : new Date(rentModel.rentDate),
      returnDate : new Date(rentModel.returnDate),
      userId : this.authService.user.userId,
      carId : this.carId
    }

    this.rentService.rentAdd(model).subscribe(response => {
      console.log(response.message);
    })


  }





}
