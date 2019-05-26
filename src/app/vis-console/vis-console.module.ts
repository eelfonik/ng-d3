import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { VisConsoleComponent } from './vis-console.component';

@NgModule({
  declarations: [VisConsoleComponent],
  exports: [VisConsoleComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class VisConsoleModule { }
