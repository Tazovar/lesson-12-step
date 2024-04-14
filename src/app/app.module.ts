import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from './shared/components/panel/panel.component';
import { DialogComponent } from './views/containers/modals/dialog/dialog.component';
import { MainComponent } from './views/components/pages/main/main.component';
import { BasketComponent } from './views/components/pages/basket/basket.component';
import {HttpClientModule} from '@angular/common/http'
import { MaterialModule } from './shared/modules/material.module';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { HeaderComponent } from './views/components/publish/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    DialogComponent,
    MainComponent,
    BasketComponent,
    LoadingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
