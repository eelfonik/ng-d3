import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { D3Service, ForceDirectedGraph, Node, Link } from '../../d3';

@Component({
  selector: 'app-graph-svg',
  template: `
    <svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g>
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeVisual]="node" *ngFor="let node of nodes" [draggableNode]="node" [draggableInGraph]="graph"></g>
      </g>
    </svg>
  `,
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit, AfterViewInit {

  constructor(private d3Service: D3Service) {}

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  @Input() nodes: Node[];
  @Input() links: Link[];

  graph: ForceDirectedGraph;

  private _options: { width: number, height: number } = { width: 800, height: 600 };

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }
}
