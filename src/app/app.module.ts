import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './views/pages/auth/auth.component';
import { MainComponent } from './views/pages/main/main.component';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { RegisterComponent } from './shared/components/auth/register/register.component';
import { CardComponent } from './shared/components/cards/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { CardDetailsComponent } from './shared/components/cards/card-details/card-details.component'
import { PasswordMathcDirective } from './core/directives/password-match.directive';
import { PatternDirective } from './core/directives/pattern.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    CardDetailsComponent,
    PasswordMathcDirective,
    PatternDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
