import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.sass']
})
export class GroupFormComponent implements OnInit {

  constructor(public dataService: DataService) { }
  model = {}

  ngOnInit() {
    this.model = this.dataService.getModel();
  }

}
