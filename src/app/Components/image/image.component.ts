import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { CarImage } from 'src/app/Models/carİmage';
import { CarİmageService } from 'src/app/Services/cari̇mage.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{

constructor(private carImageService : CarİmageService, private httpClient : HttpClient){}

  ngOnInit(): void {
    
  }




}
