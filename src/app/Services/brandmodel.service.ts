import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { BrandModel } from '../Models/brandModel';

@Injectable({
  providedIn: 'root'
})
export class BrandModelService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/";
  
  brandModels() : Observable<ListResponseModel<BrandModel>>{ 
    let neWPath = this.apiUrl+ "BrandModel/getall";
    return this.httpClient.get<ListResponseModel<BrandModel>>(neWPath)
  }

}
