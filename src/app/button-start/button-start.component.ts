import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-start',
  templateUrl: './button-start.component.html',
  styleUrls: ['./button-start.component.sass']
})
export class ButtonStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Blobex Corporation';
}
