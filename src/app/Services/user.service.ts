import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"

  userUpdate(user : any) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "User/update",user);
  }

}
