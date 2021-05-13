import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SentimentsComponent } from './sentiments/sentiments.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    SentimentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
