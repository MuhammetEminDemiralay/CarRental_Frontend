import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { CarModel } from '../Models/carModel';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/";
  
  carModels() : Observable<ListResponseModel<CarModel>>{ 
    let neWPath = this.apiUrl+ "CarModel/getall";
    return this.httpClient.get<ListResponseModel<CarModel>>(neWPath)
  }

}
