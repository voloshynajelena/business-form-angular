import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.sass']
})
export class FormGroupComponent implements OnInit {

  constructor() { }
  @Input() data;
  @Input() column_count;
  input_class_name: string;
  
  ngOnInit() {
    this.input_class_name = `col-${12/(this.column_count||1)}`
  }

}
