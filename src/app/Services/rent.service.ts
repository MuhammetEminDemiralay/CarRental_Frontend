import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentModel } from '../Models/rentModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"

  rentAdd(rentModel : RentModel) : Observable<SingleResponseModel<RentModel>>{
    return this.httpClient.post<SingleResponseModel<RentModel>>(this.apiUrl + "Rental/add", rentModel)
  }
}
