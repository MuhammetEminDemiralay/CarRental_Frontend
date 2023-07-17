import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit{
  
  constructor(private brandService : BrandService, private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.creatUpdateForm();
  }


  brandUpdateForm : FormGroup;
  @Input() brandId : number;

  creatUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandName : ["", Validators.required]
    })
    
  }

  updateBrand(){
    if(this.brandUpdateForm.valid){
      let brandModel = Object.assign({}, this.brandUpdateForm.value)
      let model = <Brand>{
        id : this.brandId,
        brandName : brandModel.brandName
      }
      this.brandService.update(model).subscribe(response => {
        window.location.reload();        
      })
    }
  }

}
