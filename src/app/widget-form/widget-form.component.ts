import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-form',
  templateUrl: './widget-form.component.html',
  styleUrls: ['./widget-form.component.sass']
})
export class WidgetFormComponent implements OnInit {

  
  constructor() { }
  @Input() items;

  ngOnInit() {
    console.log('items---->', this.items)
  }


}
