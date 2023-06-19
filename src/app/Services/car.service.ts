import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Car } from '../Models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService implements OnInit{

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    
  }

  apiUrl = "https://localhost:44313/api/"
  
  getCars() : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Car/getall" 
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getByBrandCategory(brandId : number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Car/getByBrandCategory?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }


}
