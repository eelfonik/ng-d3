import { VizConsoleService } from './../viz-console.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vis-console',
  templateUrl: './vis-console.component.html',
  styleUrls: ['./vis-console.component.css']
})
export class VisConsoleComponent implements OnInit {
  colorControl = new FormControl('');

  constructor(private vizConsoleService: VizConsoleService) { }

  ngOnInit() {
    this.colorControl.valueChanges.subscribe(val => {
      this.vizConsoleService.emitColorInputChangesVal(val);
    });
  }

}
