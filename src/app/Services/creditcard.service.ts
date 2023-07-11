import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { CreditCard } from '../Models/creditCard';
import { ListResponseModel } from '../Models/listResponseModel';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"

  addCard(creditCard : CreditCard) : Observable<SingleResponseModel<CreditCard>>{
    return this.httpClient.post<SingleResponseModel<CreditCard>>(this.apiUrl + "CreditCart/add", creditCard);
  }

  getCarsByUserId(userId : number) : Observable<ListResponseModel<CreditCard>>{
    let newPath = this.apiUrl + "CreditCart/getCarsByUserId?userId=" + userId;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }



}
