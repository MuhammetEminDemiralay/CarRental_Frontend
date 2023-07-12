import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Register } from '../Models/register';
import { Login } from '../Models/login';
import { TokenModel } from '../Models/tokenModel';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { LocalStorageService } from './local-storage.service';
import { User } from '../Models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private jwtHelper : JwtHelperService, private localStorageService : LocalStorageService, private httpClient : HttpClient) { }
  
  

  apiUrl = "https://localhost:44313/api/"


  register(register : Register) : Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "Auth/register", register);
  }

  login(login : Login) : Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "Auth/login", login);
  }

  userId : number;
  user: User;
  token :string | null= ""
  decodedTokenKey: any;
 
  

  decodedToken(token : any){
    return this.jwtHelper.decodeToken(token);

  }


  getUser() {
    let decodedToken = this.decodedToken(localStorage.getItem("_token"));
    

    if (decodedToken) {
      
        let tokenInfoName = Object.keys(decodedToken).filter(u => u.endsWith('/name'))[0];
        let userName = String(decodedToken[tokenInfoName]);

        let tokenInfoId = Object.keys(decodedToken).filter(u => u.endsWith('/nameidentifier'))[0];
        let userId = Number(decodedToken[tokenInfoId]);
        this.userId = userId;
        let claimInfo = Object.keys(decodedToken).filter(u => u.endsWith('/role'))[0];
        let roles = decodedToken[claimInfo];
      
        let tokenInfoEmail = decodedToken.email;

        this.user = {
          userName: userName,
          userId: userId,
          email: tokenInfoEmail,
          roles: roles
        };

    }
    return this.user;
  }


  loggedIn() {
    if (localStorage.getItem("_token")) {
      return this.jwtHelper.isTokenExpired();
    } else {
      return false;
    }
  }



  isAdmin() {
    let isAdmin = false
    if(this.loggedIn())
    if (localStorage.getItem("_token")) {
      let claims = this.user.roles?.toString().split(',') 
      claims?.map(role => {
        if (role.toLocaleLowerCase().indexOf("admin") !== -1) {
          isAdmin = true;
        }
      })
    }

    return isAdmin;
  }

  logOut(){
    this.localStorageService.removeToken();
  }



}
