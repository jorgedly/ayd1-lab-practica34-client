import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  url_api = 'http://localhost:3000';

  constructor(public httpClient: HttpClient) { }

  login(email,password){
    const data = {email, password}
    const url = `${this.url_api}/login`;
    return new Promise(resolve => {
      this.httpClient.post(url,data)
      .subscribe(resp => {
        resolve(resp["auth"]);
      });
    });
  }

  register(nombres,apellidos,dpi,no_cuenta,email,password){
    const data = {nombres,apellidos,dpi,no_cuenta,email,password}
    const url = `${this.url_api}/register`;
    return new Promise(resolve => {
      this.httpClient.post(url,data)
      .subscribe(resp => {
        resolve(resp["success"]);
      });
    });
  }

  devolverUsuario(email,password){
    const data = {email, password}
    const url = `${this.url_api}/getUser`;
    return new Promise(resolve => {
      this.httpClient.post(url,data)
      .subscribe(resp => {
        resolve(resp);
      });
    });
  }
}
