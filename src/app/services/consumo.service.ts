import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  url: string = '';

  constructor(private http: HttpClient) { }

  obtenerTipoCambioSimple() {
    
    return this.http.get(`${this.url}`);
  }

}
