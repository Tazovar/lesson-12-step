import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/components/pages/main/main.component';
import { BasketComponent } from './views/components/pages/basket/basket.component';
const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"basket", component:BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
