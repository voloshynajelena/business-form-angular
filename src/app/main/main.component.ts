import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  constructor(private modalService: NgbModal) { }

  closeResult: string;
  open(content) {
    this.modalService.open(content, { size: 'lg', centered: true, scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
