import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { BrandModel } from 'src/app/Models/brandModel';
import { Car } from 'src/app/Models/car';
import { Color } from 'src/app/Models/color';
import { BrandService } from 'src/app/Services/brand.service';
import { BrandModelService } from 'src/app/Services/brandmodel.service';
import { CardetailService } from 'src/app/Services/cardetail.service';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit{
  

  constructor(private router : Router ,private formBuilder : FormBuilder, private brandModelService : BrandModelService, private brandService : BrandService ,private colorService : ColorService, private carDetails : CardetailService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.getCarId();
    this.createForms();
    this.getCar();
    this.getBrands();
    this.getColors();
    this.getBrandModels();
  }

  carsForm : FormGroup;
  colors : Color[] = [];
  brands : Brand[] = [];
  brandModels : BrandModel[] = [];
  carId : number;

  getCarId(){
    this.activatedRoute.params.subscribe(params =>{
     this.carId = params["carId"]
    })
  }


  getCar(){
    this.carDetails.getCarCarId(this.carId).subscribe(response =>{
      let car = response.data;
      this.carsForm.setValue({
       id : this.carId,
       brandId : car.brandId,
       colorId : car.colorId,
       brandModelId : car.brandModelId,
       modelYear : car.modelYear,
       dailyPrice : car.dailyPrice,
       description : car.description
      })
    })
  }

  createForms(){
    this.carsForm = this.formBuilder.group({
      id : [""],
      brandId : ["", Validators.required],
      colorId : ["", Validators.required],
      brandModelId : ["", Validators.required],
      modelYear : ["", Validators.required],
      dailyPrice : ["", Validators.required],
      description : ["", Validators.required]
  })
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  getBrandModels(){
    this.brandModelService.brandModels().subscribe(response => {
      this.brandModels = response.data;
    })
  }

  update(){
    let productModel = Object.assign({}, this.carsForm.value);
    this.carDetails.update(productModel).subscribe(response => {
      this.router.navigate(["cardetails"])
    })
  }





}
