import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { CarDetail } from '../Models/carDetail';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { Car } from '../Models/car';

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
    let newPath = this.apiUrl + "Car/getCarDetailsByBrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }

  getCarDetailColor(colorId : number) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Car/getCarDetailsByColor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath); 
  }

  getMoreCarDetails(carId : CarDetail) : Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Car/getMorCarDetails?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car : CarDetail) : Observable<SingleResponseModel<CarDetail>>{
    return this.httpClient.post<SingleResponseModel<CarDetail>>(this.apiUrl + "Car/add", car);
  }


  delete(car : Car) : Observable<SingleResponseModel<Car>>{
    return this.httpClient.post<SingleResponseModel<Car>>(this.apiUrl + "Car/delete", car);
  }

  getCarCarId(carId : number) : Observable<SingleResponseModel<Car>>{
    return this.httpClient.get<SingleResponseModel<Car>>(this.apiUrl + "Car/get?id=" + carId);
  }

  update(car : Car) : Observable<SingleResponseModel<Car>>{
    return this.httpClient.post<SingleResponseModel<Car>>(this.apiUrl + "Car/update", car);
  }
  

}
