import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './Components/brand/brand.component';
import { CarComponent } from './Components/car/car.component';
import { CarDetailsComponent } from './Components/cardetails/cardetails.component';
import { MorecardetailsComponent } from './Components/morecardetails/morecardetails.component';


const routes: Routes = [
  {path : "home", component : CarDetailsComponent},
  {path : "cardetails", component : CarDetailsComponent},
  {path : "cars/brand/:brandId", component : CarDetailsComponent},
  {path : "moreCarDetails/:carId", component : MorecardetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
