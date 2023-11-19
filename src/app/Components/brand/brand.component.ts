import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { BrandModel } from 'src/app/Models/brandModel';
import { AuthService } from 'src/app/Services/auth.service';
import { BrandService } from 'src/app/Services/brand.service';
import { BrandModelService } from 'src/app/Services/brandmodel.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  constructor(private activatedRoute : ActivatedRoute ,private authService : AuthService, private router : Router ,private brandService : BrandService, private brandModelService : BrandModelService){}

  ngOnInit(): void {
    this.authService.getUser();
    this.getBrands();
    this.getCarModels();
  }

  brands : Brand[] = [];
  carModels : BrandModel[] = [];
  currentBrand : Brand;
  brandId: number;
  
  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })

  }

  setCurrentBrand(brand : Brand){
    this.currentBrand = brand;
    this.brandId = brand.id;
  }

  getCurrentBrandClass(brand : Brand){
    if(this.currentBrand == brand){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

  unloadCurrentBrand : Brand;
  getClearCurrentBrand(){
    this.currentBrand = this.unloadCurrentBrand;
  }

  deleteBrand(brand : Brand){
    this.brandService.deleteBrand(brand).subscribe(response => {
      window.location.reload();
    })
  }
  
  getCarModels(){
    this.brandModelService.brandModels().subscribe(response => {
      this.carModels = response.data;
    })
  }
  
  isAdmin(){
    return this.authService.isAdmin();
  }





}




