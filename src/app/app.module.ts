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
import { PaymentComponent } from './Components/payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { StatuComponent } from './Components/statu/statu.component';
import { CommonModule } from '@angular/common';
import { CustomDirective } from './Directives/custom.directive';
import { DropDownDirective } from './Directives/drop-down.directive';
import { HeaderComponent } from './Components/header/header.component';
import { ComingsoonComponent } from './Components/comingsoon/comingsoon.component';
import { StoppropagationDirective } from './Directives/stoppropagation.directive';





export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    CarDetailsComponent,
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
    RentcarComponent,
    PaymentComponent,
    StatuComponent,
    HomeComponent,
    CustomDirective,
    DropDownDirective,
    HeaderComponent,
    ComingsoonComponent,
    StoppropagationDirective

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
      
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {positionClass : "toast-bottom-right"}
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
