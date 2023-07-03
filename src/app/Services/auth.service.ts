import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Register } from '../Models/register';
import { Login } from '../Models/login';
import { TokenModel } from '../Models/tokenModel';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"

  register(register : Register) : Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "Auth/register", register);
  }

  login(login : Login) : Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "Auth/Login", login);
  }

}
