import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { D3Module } from './d3/d3.module';
import { VisConsoleModule } from './vis-console/vis-console.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    D3Module,
    VisConsoleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
