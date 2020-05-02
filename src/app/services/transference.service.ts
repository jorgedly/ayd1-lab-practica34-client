import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {

  private API_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public transferMoney(cuenta1, cuenta2, monto){
    let data = {cuenta1, cuenta2, monto}
    return this.http.post(`${this.API_URL}/transferMoney`,data);
  }

}
