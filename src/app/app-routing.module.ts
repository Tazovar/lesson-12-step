import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/pages/auth/auth.component';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { RegisterComponent } from './shared/components/auth/register/register.component';
import { MainComponent } from './views/pages/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UnAuthGuard } from './core/guards/un-auth.guard';
import { CardDetailsComponent } from './shared/components/cards/card-details/card-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'auth' , pathMatch:'full'},
  {
    path:'auth' ,
    canActivate:[UnAuthGuard],
    component:AuthComponent,
    children:[
{path:'register' , component:RegisterComponent},
{path:"login" , component:LoginComponent}
  ]
},
{path:'main', component:MainComponent, canActivate:[AuthGuard]},
{path:'details/:cardId', component:CardDetailsComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
