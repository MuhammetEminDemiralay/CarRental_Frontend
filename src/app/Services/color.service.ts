import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../Models/color';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/";
  
  getColors() : Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "Color/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  addColor(color : Color) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Color/add", color);
  }

  deleteColor(color : Color) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Color/delete", color);
  }

  updateColor(color : Color) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Color/update", color);
  }


}
