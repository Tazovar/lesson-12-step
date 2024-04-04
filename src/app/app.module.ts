import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { TestPipe } from './pipes/test.pipe';
import { SPipe } from './pipes/s.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    SPipe,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
