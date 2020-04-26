import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker/public-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tipocambio',
  templateUrl: './tipocambio.component.html',
  styleUrls: ['./tipocambio.component.scss']
})
export class TipocambioComponent implements OnInit {

  cambioSimple: number;
  cambioDia: number;
  limite: Date;

  constructor(private http: HttpClient) {
    this.cambioSimple = 0.0;
    this.cambioDia = 0.0;
    this.limite = new Date();
  }

  ngOnInit(): void {
    this.con1();
  }

  con0() {
    const body = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <TipoCambioDia xmlns="http://www.banguat.gob.gt/variables/ws/" />
      </soap:Body>
    </soap:Envelope>`;
    this.http.post('https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?wsdl', body, {
      headers: new HttpHeaders({
        //'Content-Length': '166',
        'Content-Type': 'application/soap+xml; charset="UTF-8"',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        //'Host': 'www.banguat.gob.gt',
        'SOAPAction': '"http://www.banguat.gob.gt/variables/ws/TipoCambioDia"'
      })
    })
      .subscribe(data => {
        console.log(data);
      });
  }

  con1() {
    var http = new XMLHttpRequest();
    var postdata = "param1=value1&param2=value2";
    http.open("POST", "http://www.httpdebugger.com", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-length", `${postdata.length}`);
    http.setRequestHeader("Access-Control-Allow-Origin", '*');

    http.onreadystatechange = function () {
      if (http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
      }
    }
    http.send(postdata);
  }

  cambiar(event: MatDatepickerInputEvent<Date>): void {
    const fecha: Date = event.value;
  }

}
