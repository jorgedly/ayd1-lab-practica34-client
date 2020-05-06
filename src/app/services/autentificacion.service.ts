import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  url_api = 'https://analisis1.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  rePalabra = /^[a-zA-Z]+$/;
  reNumero = /^[0-9]+$/;

  verificarLogin(email,password): boolean {
    if (email && password) {
      if (
        !(password.toLowerCase().includes('select')) &&
        !(password.toLowerCase().includes('script')) &&
        !(email.toLowerCase().includes('select')) &&
        !(email.toLowerCase().includes('script')) &&
        this.reEmail.test(email)
      ) {
        return true;
      }
    }
    return false;
  }

  login(email,password){
    const data = {email, password}
    const url = `${this.url_api}/login`;
    return new Promise(resolve => {
      this.httpClient.post(url,data)
      .subscribe(resp => {
        resolve(resp);
      });
    });
  }

  verificarRegistro(nombres,apellidos,dpi,no_cuenta,email,password): boolean {
    if (nombres && apellidos && email && password) {
      if (
        !(password.toLowerCase().includes('select')) &&
        !(password.toLowerCase().includes('script')) &&
        !(nombres.toLowerCase().includes('select')) &&
        !(nombres.toLowerCase().includes('script')) &&
        !(apellidos.toLowerCase().includes('select')) &&
        !(apellidos.toLowerCase().includes('script')) &&
        !(email.toLowerCase().includes('select')) &&
        !(email.toLowerCase().includes('script')) &&
        this.reEmail.test(email) &&
        this.rePalabra.test(nombres) &&
        this.rePalabra.test(apellidos) &&
        this.reNumero.test(dpi) &&
        this.reNumero.test(no_cuenta)
      ) {
        return true;
      }
    }
    return false;
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

  obtenerDatos(no_cuenta){
    const data = { no_cuenta }
    const url = `${this.url_api}/getDatos`;
    return new Promise(resolve => {
      this.httpClient.post(url,data)
      .subscribe(resp => {
        resolve(resp);
      });
    });
  }

  verificarPerfil(no_cuenta, email,password): boolean {
    if (email && password) {
      if (
        !(password.toLowerCase().includes('select')) &&
        !(password.toLowerCase().includes('script')) &&
        !(email.toLowerCase().includes('select')) &&
        !(email.toLowerCase().includes('script')) &&
        this.reEmail.test(email) && 
        this.reNumero.test(no_cuenta)
      ) {
        return true;
      }
    }
    return false;
  }

  modificarPerfil(no_cuenta, email, password){
    const data = {no_cuenta, email, password}
    const url = `${this.url_api}/modificarPerfil`;
    return new Promise(resolve => {
      this.httpClient.put(url,data)
      .subscribe(resp => {
        resolve(resp);
      });
    });
  }

}
