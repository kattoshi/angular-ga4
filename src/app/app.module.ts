import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxGa4Config , NgxGa4Module} from 'ngx-ga4';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGa4Module.forRoot({  /* measurementId : "G-xxxxxxxxxx" */ }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
