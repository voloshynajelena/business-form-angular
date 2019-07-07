import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }
  
  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  getModel() {
    return this.model;
  }

  model = {
    type: "section",
    header: "Opportunity details",
    columns: 2,
    items: [
      {
        "type": "input",
        "label": "Opportunity name",
        "value": "Acme - 1200 Widgets (Sample)",
        "required": true
      },
      {
        "type": "currency",
        "label": "Ammount + currency",
        "value": 146,
        "symbol": "EUR"
      },
      {
        "type": "currency",
        "label": "Another input",
        "value": 140000,
        "symbol": "EUR",
        "precision": 2
      }
    ]
  }
}
