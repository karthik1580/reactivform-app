import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './_common/navbar/navbar.component';
import { FooterComponent } from './_common/footer/footer.component';
import { AddGstFormComponent } from './components/add-gst-form/add-gst-form.component';
import { InputTextboxComponent } from './_reusable/input-textbox/input-textbox.component';
import { GetGstFormComponent } from './components/get-gst-form/get-gst-form.component';
import { UpdateGstFormComponent } from './components/update-gst-form/update-gst-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGstFormComponent,
    GetGstFormComponent,
    UpdateGstFormComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    InputTextboxComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 200,
      showTitle: true,
      showSubtitle: true,
      responsive: true,
      startFromZero: true,
      outerStrokeWidth: 2,
      innerStrokeWidth: 2,
      outerStrokeColor: "#808080",
      innerStrokeColor: "#e7e8ea",
      animationDuration: 300,
      clockwise: true,
      titleFontSize: '50px',
      subtitleFontSize: '30px',
      title: [
        "working",
        "in",
        "progress"
      ],
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AddGstFormComponent,
//     GetGstFormComponent,
//     UpdateGstFormComponent
