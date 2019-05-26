import { VizConsoleService } from './../viz-console.service';
import { D3Service } from './../d3.service';
import { Component, OnInit } from '@angular/core';
import { Node, Link } from './models';


@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css'],
  providers: [D3Service]
})
export class D3Component implements OnInit {

  title = 'd3';
  nodes: Node[] = [];
  links: Link[] = [];

  // need to subscribe to valueChanges observable here (inside some lifecycle ?)
  constructor(private vizConsoleService: VizConsoleService ) {
    const N = 100;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[i - 1].linkCount++;
        this.nodes[i * m - 1].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

  ngOnInit() {
    this.vizConsoleService.colorInputChanged.subscribe(val => {
      this.nodes.forEach(node => node.color = val);
    });
  }

}
