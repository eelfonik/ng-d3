import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { D3Service } from './d3';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    ...SHARED_VISUALS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
