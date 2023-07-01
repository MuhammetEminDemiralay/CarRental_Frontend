import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/brand';
import { CarModel } from 'src/app/Models/carModel';
import { BrandService } from 'src/app/Services/brand.service';
import { CarModelService } from 'src/app/Services/carmodel.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  constructor(private brandService : BrandService, private carModelService : CarModelService){}

  ngOnInit(): void {
    this.getBrands();
    this.getCarModels();
  }

  brands : Brand[] = [];
  carModels : CarModel[] = [];
  currentBrand : Brand;


  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }


  setCurrentBrand(brand : Brand){
    this.currentBrand = brand;
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
    this.carModelService.carModels().subscribe(response => {
      this.carModels = response.data;
    })
  }
  






}




