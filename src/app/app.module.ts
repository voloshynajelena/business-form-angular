import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StartComponent } from './start/start.component';
import { WidgetComponent } from './widget/widget.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    WidgetComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
