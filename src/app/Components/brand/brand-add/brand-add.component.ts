import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Brand } from 'src/app/Models/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit{
  

  constructor(private brandService : BrandService, private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.createAddForm();
  }

  brandAddForm : FormGroup;

  createAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName : ["", Validators.required],
      model : ["", Validators.required]
    })
  }

  add(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.addBrand(brandModel).subscribe(response =>{
        window.location.reload();
      })
    }
  }

  

}
