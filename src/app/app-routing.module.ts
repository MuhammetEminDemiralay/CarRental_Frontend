import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './Components/brand/brand.component';
import { CarDetailsComponent } from './Components/cardetails/cardetails.component';
import { MorecardetailsComponent } from './Components/morecardetails/morecardetails.component';
import { BrandAddComponent } from './Components/brand/brand-add/brand-add.component';
import { ColorComponent } from './Components/color/color.component';
import { ColorAddComponent } from './Components/color/color-add/color-add.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrandUpdateComponent } from './Components/brand/brand-update/brand-update.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CarAddComponent } from './Components/cardetails/car-add/car-add.component';
import { UpdateCarComponent } from './Components/cardetails/update-car/update-car.component';
import { RentcarComponent } from './Components/rentcar/rentcar.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { StatuComponent } from './Components/statu/statu.component';
import { HomeComponent } from './Components/home/home.component';
import { ComingsoonComponent } from './Components/comingsoon/comingsoon.component';
import { exampleGuard } from './Guards/guards';



const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "cardetails", component : CarDetailsComponent, data:{key:"car"}},
  {path : "cars/brand/:brandId", component : CarDetailsComponent},
  {path : "cars/color/:colorId", component : CarDetailsComponent},
  {path : "moreCarDetails/:carId", component : MorecardetailsComponent},
  {path : "brandAdd", component : BrandAddComponent},
  {path : "colorAdd", component : ColorAddComponent},
  {path : "brandUpdate", component : BrandUpdateComponent},
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent, canActivate:[exampleGuard]},
  {path : "add", component : CarAddComponent},
  {path : "updatecar", component : UpdateCarComponent},
  {path : "rentcar", component : RentcarComponent},
  {path : "payment", component : PaymentComponent},
  {path : "cars/statu/:statuId", component : CarDetailsComponent},
  {path : "home", component : HomeComponent},  
  {path : "**", component : ComingsoonComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
