import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          cx="0"
          cy="0"
          [attr.fill]="node.color"
          [attr.r]="node.r">
      </svg:circle>
      <svg:text>
        {{node.id}}
      </svg:text>
    </svg:g>
  `
})
export class NodeVisualComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('nodeVisual') node: Node;
}
