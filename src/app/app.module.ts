import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './Components/navi/navi.component';
import { BrandComponent } from './Components/brand/brand.component';
import { HttpClientModule } from "@angular/common/http";
import { CarComponent } from './Components/car/car.component';
import { CarDetailsComponent } from './Components/cardetails/cardetails.component';
import { HomeComponent } from './Components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    CarDetailsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }