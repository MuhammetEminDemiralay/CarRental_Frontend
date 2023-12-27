import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { CarImage } from '../../Models/carİmage';
import { CarİmageService } from '../../Services/cari̇mage.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, OnChanges{

  constructor(private imageService : CarİmageService){}
  
  ngOnInit(): void {
    this.formData = new FormData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.carId){
    }
  }

  @Input() carId : number;
  files : File[] = [];
  formData : any

  inputChange(e : any){
    this.files = e.target.files;
    for (let i = 0; i < this.files.length; i++) {
      this.formData.append('files', this.files[i]);
    }    
    this.formData.append('carId', `${this.carId}`);
    this.formData.append('imagePath', `${this.files}`);
  }

  imageAdd(){
    this.imageService.imageAdd(this.formData).subscribe(response => {
      window.location.reload();
    })
  }
  
}
