import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.sass']
})
export class MainFormComponent implements OnInit {

  constructor(public dataService: DataService) { }
  model = {}

  ngOnInit() {
    this.model = this.dataService.getModel();
  }

  title = 'Blobex Corporation';
}
