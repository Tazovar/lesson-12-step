import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './shared/components/card/card.component';
import { FormComponent } from './shared/components/form/form.component';
import { MainComponent } from './views/pages/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { CardDetailsComponent } from './views/pages/card-details/card-details.component'
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    MainComponent,
    CardDetailsComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
