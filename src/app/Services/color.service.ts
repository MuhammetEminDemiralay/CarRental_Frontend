import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../Models/color';
import { ListResponseModel } from '../Models/listResponseModel';

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


}
