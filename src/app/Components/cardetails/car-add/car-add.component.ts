import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { Color } from 'src/app/Models/color';
import { BrandService } from 'src/app/Services/brand.service';
import { CardetailService } from 'src/app/Services/cardetail.service';
import { BrandModelService } from 'src/app/Services/brandmodel.service';
import { ColorService } from 'src/app/Services/color.service';
import { BrandModel } from 'src/app/Models/brandModel';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit{
  

  constructor(private router : Router ,private carDetailService : CardetailService ,private brandModelService : BrandModelService ,private brandService : BrandService, private colorService : ColorService, private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getBrandModels();
    this.createAddCarForms();
  }


  brands : Brand[] = [];
  colors : Color[] = [];
  brandModels : BrandModel[] = [];
  carsForm : FormGroup;

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  getBrandModels(){
    this.brandModelService.brandModels().subscribe(response => {
      this.brandModels = response.data;
    })
  }

  createAddCarForms(){
    this.carsForm = this.formBuilder.group({
      brandId : ["", Validators.required],
      colorId : ["", Validators.required],
      brandModelId : ["", Validators.required],
      modelYear : ["", Validators.required],
      dailyPrice : ["", Validators.required],
      description : ["", Validators.required]
    })
  }
  

  add(){
    if(this.carsForm.valid){
      let productModel = Object.assign({}, this.carsForm.value)
      this.carDetailService.add(productModel).subscribe(response => {
      
      })
    }
  }



}
