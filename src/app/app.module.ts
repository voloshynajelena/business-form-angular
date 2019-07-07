import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormSectionComponent } from './form-section/form-section.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { ContentComponent } from './content/content.component';
import { ButtonStartComponent } from './button-start/button-start.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    FormSectionComponent,
    GroupFormComponent,
    ContentComponent,
    ButtonStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
