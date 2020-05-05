import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private API_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public TranferenciaGeneral(){
    return this.http.get(`${this.API_URL}/reporte/general`);
  }

  public misTransferencias(id){
    return this.http.get(`${this.API_URL}/reporte/general/${id}`);
  }

  
}
