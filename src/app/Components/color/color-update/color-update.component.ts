import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Color } from 'src/app/Models/color';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit{
  
  constructor(private formBuilder : FormBuilder, private colorService : ColorService){}

  ngOnInit(): void {
    this.createColorForm();
  }

  @Input() colorId : number;

  updateColorForm : FormGroup;

  createColorForm(){
    this.updateColorForm = this.formBuilder.group({
      colorName : ["", Validators.required]
    })
  }

  update(){
    let model = Object.assign({}, this.updateColorForm.value);
    let colorId = this.colorId;
    let colorModel = <Color>{
      id : colorId,
      colorName : model.colorName
    }
    
    this.colorService.updateColor(colorModel).subscribe(response => {  
      window.location.reload();    
    })
  }

}
