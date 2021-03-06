import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Node, Link, ForceDirectedGraph } from './d3/models';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
   * while maintaining the d3 simulations physics
   */
  constructor(private http: HttpClient) {}

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement, containerElement) {
    const svg = d3.select(svgElement);
    const container = d3.select(containerElement);

    function zoomed() {
      const transform = d3.event.transform;
      container.attr(
        'transform',
        'translate(' +
          transform.x +
          ',' +
          transform.y +
          ') scale(' +
          transform.k +
          ')'
      );
    }

    svg.call(d3.zoom().on('zoom', zoomed));
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element, node: Node, graph: ForceDirectedGraph) {
    const d3element = d3.select(element);

    function started() {
      /** Preventing propagation of dragstart to parent elements */
      d3.event.sourceEvent.stopPropagation();

      if (!d3.event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      d3.event.on('drag', dragged).on('end', ended);

      function dragged() {
        node.fx = d3.event.x;
        node.fy = d3.event.y;
      }

      function ended() {
        if (!d3.event.active) {
          graph.simulation.alphaTarget(0);
        }

        node.fx = null;
        node.fy = null;
      }
    }

    d3element.call(d3.drag().on('start', started));
  }

  /** The interactable graph we will simulate
   * This method does not interact with the document, purely physical calculations with d3
   */
  getForceDirectedGraph(
    nodes: Node[],
    links: Link[],
    options: { width; height }
  ) {
    const graph = new ForceDirectedGraph(nodes, links, options);
    return graph;
  }

  getPopulationData() {
    return this.http.get('assets/population.csv', {responseType: 'text'});
  }

  parseCSVData(data: string) {
    return d3.csvParse(data);
  }
}
