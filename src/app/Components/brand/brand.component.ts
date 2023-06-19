import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  constructor(private brandService : BrandService){}

  ngOnInit(): void {
    this.getBrands();
  }
  
  brands : Brand[] = []
  currentBrand : Brand;

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  
  getCurrentCategory(brand : Brand){
    this.currentBrand = brand;
  }

  getByCurrentCategory(brand : Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  clearCategory : Brand;
  clearCurrentCategory(){
    this.currentBrand = this.clearCategory;
  }

  getByAllCategory(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
