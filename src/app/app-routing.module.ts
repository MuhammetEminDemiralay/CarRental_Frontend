import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './Components/brand/brand.component';
import { CarComponent } from './Components/car/car.component';

const routes: Routes = [
  {path : "", component : CarComponent},
  {path : "car", component : CarComponent},
  {path : "car/brand/:brandId", component : CarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
