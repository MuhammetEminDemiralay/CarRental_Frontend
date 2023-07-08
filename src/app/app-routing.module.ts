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


const routes: Routes = [
  {path : "", component : CarDetailsComponent},
  {path : "cardetails", component : CarDetailsComponent},
  {path : "cars/brand/:brandId", component : CarDetailsComponent},
  {path : "cars/color/:colorId", component : CarDetailsComponent},
  {path : "moreCarDetails/:carId", component : MorecardetailsComponent},
  {path : "brandAdd", component : BrandAddComponent},
  {path : "colorAdd", component : ColorAddComponent},
  {path : "brandUpdate", component : BrandUpdateComponent},
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "add", component : CarAddComponent},
  {path : "updatecar", component : UpdateCarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
