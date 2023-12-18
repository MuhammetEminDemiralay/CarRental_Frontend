import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
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
  
  constructor(private elementRef : ElementRef, 
    private rederer : Renderer2, 
    private activatedRoute : ActivatedRoute,
    private authService : AuthService, 
    private router : Router,
    private brandService : BrandService, 
    private brandModelService : BrandModelService
  ){}

  ngOnInit(): void {
    this.authService.getUser();
    this.getBrands();
    this.getCarModels();
  }

  brands : Brand[] = [];
  carModels : BrandModel[] = [];
  currentBrand : Brand;
  brandId: number;
  unloadCurrentBrand : Brand;
  
  getBrands(){
    this.brandService.getAllBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  setCurrentBrand(brand : Brand){
    this.currentBrand = brand;
    this.brandId = brand.id;
  }

  getClearCurrentBrand(){
    this.currentBrand = this.unloadCurrentBrand;
  }

  deleteBrand(brand : Brand){
    if(window.confirm("Are you sure...")){
      this.brandService.deleteBrand(brand).subscribe(response => {
        window.location.reload();
      })
    }
  }
  
  getCarModels(){
    this.brandModelService.getBrandModels().subscribe(response => {
      this.carModels = response.data;
    })
  }
  
  isAdmin(){
    return this.authService.isAdmin();
  }

  isActive(brand : Brand){
    if(!this.isAdmin()){
      if(brand == this.currentBrand){
        return "active"
      }
    }
    return "";
  }

  notActive(){
    this.currentBrand = null;
  }

  allBrands(){
    this.currentBrand = null;
    this.router.navigate(["/cardetails"])
  }

}




