import { Component, Input } from '@angular/core';
import { Link } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        [attr.x1]="link.source.x"
        [attr.y1]="link.source.y"
        [attr.x2]="link.target.x"
        [attr.y2]="link.target.y"
        [attr.stroke]="link.color"
        [attr.stroke-width]="1"
    ></svg:line>
  `
})
export class LinkVisualComponent  {
  // tslint:disable-next-line:no-input-rename
  @Input('linkVisual') link: Link;
}
