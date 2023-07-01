import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit{
  
  constructor(private brandService : BrandService, private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.creatUpdateForm();
  }


  brandUpdateForm : FormGroup;


  creatUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandModel : ["", Validators.required],
      model : ["", Validators.required]
    })
  }

  updateBrand(){
    let brandModel = Object.assign({}, this.brandUpdateForm.value);
    this.brandService.updateBrand(brandModel).subscribe(response => {
      window.location.reload();
    })
  }

}
