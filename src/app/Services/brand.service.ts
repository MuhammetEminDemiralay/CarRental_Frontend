import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Brand } from '../Models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"


  getBrands() : Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + "Brand/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
