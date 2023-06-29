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
import { ColorComponent } from './Components/color/color.component';
import { MorecardetailsComponent } from './Components/morecardetails/morecardetails.component';
import { BrandUpdateComponent } from './Components/brand/brand-update/brand-update.component';
import { BrandAddComponent } from './Components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './Components/color/color-add/color-add.component';
import { ColorUpdateComponent } from './Components/color/color-update/color-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    CarDetailsComponent,
    HomeComponent,
    ColorComponent,
    MorecardetailsComponent,
    BrandUpdateComponent,
    BrandAddComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
