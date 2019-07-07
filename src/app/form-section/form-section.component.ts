import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.sass']
})
export class FormSectionComponent implements OnInit {

  constructor(public dataService: DataService) { }
  model = {}

  ngOnInit() {
    this.model = this.dataService.getModel();
  }



}
