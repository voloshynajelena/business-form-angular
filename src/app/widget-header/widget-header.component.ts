import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.sass']
})
export class WidgetHeaderComponent implements OnInit {

  constructor() { }
  @Input() name;
  
  ngOnInit() {
  }

}
