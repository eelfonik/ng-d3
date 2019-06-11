import { VizConsoleService } from './../viz-console.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vis-console',
  templateUrl: './vis-console.component.html',
  styleUrls: ['./vis-console.component.css']
})
export class VisConsoleComponent implements OnInit {
  colorControl = new FormControl('');

  COLOR_PALLETE = {
    '#173f5f': 'Navy blue',
    '#20639b': 'Light blue',
    '#3caea3': 'Mint',
    '#F1D570': 'Yellow',
    '#DC5F46': 'Flamingo'
  };

  @Input() colors: [string, string][] = Object.entries(this.COLOR_PALLETE);

  constructor(private vizConsoleService: VizConsoleService) { }

  ngOnInit() {
    this.colorControl.valueChanges.subscribe(val => {
      this.vizConsoleService.emitColorInputChangesVal(val);
    });
  }

}
