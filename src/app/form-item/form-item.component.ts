import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.sass']
})
export class FormItemComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
