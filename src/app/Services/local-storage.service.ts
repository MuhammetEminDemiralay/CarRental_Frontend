import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  setToken(token : string){
    localStorage.setItem("_token", token);
  }

  getToken(){
    localStorage.getItem("_token");
  }

  removeToken(){
    localStorage.removeItem("_token");
  }

}
