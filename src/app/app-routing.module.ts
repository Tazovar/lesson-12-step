import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/pages/main/main.component';
import { CardDetailsComponent } from './views/pages/card-details/card-details.component';

const routes: Routes = [
  {path:'', component:MainComponent},
   {path:'details/:id' , component:CardDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
