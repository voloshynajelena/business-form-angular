import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StartComponent } from './start/start.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetFormComponent } from './widget-form/widget-form.component';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormItemComponent } from './form-item/form-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    WidgetComponent,
    WidgetFormComponent,
    WidgetHeaderComponent,
    FormGroupComponent,
    FormItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
