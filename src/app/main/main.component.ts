import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model  = {
    "widgets": [
      {
        "id": 1,
        "name": "Blobex Corporation",
        "type": "form",
        "items": [
          {
            "type": "section",
            "header": "Opportunity details",
            "columns": 2,
            "items": [
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
        ]
      }
    ]
  }

  isPopUpShow :boolean = false;

  public togglePopUp() {
    this.isPopUpShow = !this.isPopUpShow;
  }
}
