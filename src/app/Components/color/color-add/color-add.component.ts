import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit{
  
  constructor(private colorService : ColorService, private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.createColorForm();
  }

  colorAddForm : FormGroup;

  createColorForm(){
    this.colorAddForm = this.formBuilder.group({
      colorName : ["", Validators.required]
    })
  }

  add(){
    if(this.colorAddForm.valid){
      let productModel = Object.assign({}, this.colorAddForm.value);
      this.colorService.addColor(productModel).subscribe(response => {
      window.location.reload();
    })
    }
    
  }

}
