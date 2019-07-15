import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from '../visuals/graph';
import { SHARED_VISUALS } from '../visuals/shared';
import { D3_DIRECTIVES } from './directives';
import { D3Component } from './d3.component';
import { BarChartComponent } from '../visuals/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    D3Component,
    BarChartComponent,
  ],
  exports: [D3Component],
  imports: [
    CommonModule
  ]
})
export class D3Module { }
