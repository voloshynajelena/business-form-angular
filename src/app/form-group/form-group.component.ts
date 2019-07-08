import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.sass']
})
export class FormGroupComponent implements OnInit {

  constructor() { }
  @Input() data;

  ngOnInit() {
  }

}
