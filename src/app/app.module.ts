import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './Components/navi/navi.component';
import { BrandComponent } from './Components/brand/brand.component';
import { HttpClientModule } from "@angular/common/http";
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
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CarAddComponent } from './Components/cardetails/car-add/car-add.component';
import { UpdateCarComponent } from './Components/cardetails/update-car/update-car.component';
import { RentcarComponent } from './Components/rentcar/rentcar.component';



export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarDetailsComponent,
    HomeComponent,
    ColorComponent,
    MorecardetailsComponent,
    BrandUpdateComponent,
    BrandAddComponent,
    ColorAddComponent,
    ColorUpdateComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CarAddComponent,
    UpdateCarComponent,
    RentcarComponent   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
