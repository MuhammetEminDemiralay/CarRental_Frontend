import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { CarDetail } from '../Models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/";
  
  getCarsDetail() : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Car/carDetail"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailBrand(brandId : number) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Car/getCarDetailsByBrand?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

}
