import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { CarImage } from '../Models/carİmage';

@Injectable({
  providedIn: 'root'
})
export class CarİmageService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"


  getAllİmages() : Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImage/getall"  
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getImagesByCarId(carId : number) : Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "CarImage/getİmagesByCarId?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

}
