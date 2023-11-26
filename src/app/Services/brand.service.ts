import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Brand } from '../Models/brand';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"


  getAllBrands() : Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "Brand/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  addBrand(brand : Brand) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Brand/Add", brand);
  }

  deleteBrand(brand : Brand) : Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl + "Brand/delete", brand);
  } 

  update(brand : Brand) : Observable<SingleResponseModel<Brand>>{
    return this.httpClient.post<SingleResponseModel<Brand>>(this.apiUrl + "Brand/update", brand);
  }

  
}
