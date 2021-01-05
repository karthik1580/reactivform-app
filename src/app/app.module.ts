import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './_common/navbar/navbar.component';
import { FooterComponent } from './_common/footer/footer.component';
// import { AddGstFormComponent } from './components/add-gst-form/add-gst-form.component';
// import { GetGstFormComponent } from './components/get-gst-form/get-gst-form.component';
// import { UpdateGstFormComponent } from './components/update-gst-form/update-gst-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AddGstFormComponent,
//     GetGstFormComponent,
//     UpdateGstFormComponent
