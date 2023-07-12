import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { Payment } from '../Models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"

  addPay(payment : Payment) : Observable<SingleResponseModel<Payment>>{
    return this.httpClient.post<SingleResponseModel<Payment>>(this.apiUrl + "Payment/add", payment)
  }
  
}
