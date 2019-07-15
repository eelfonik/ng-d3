import { Component, OnInit } from '@angular/core';
import { D3Service } from './../../d3.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private d3Service: D3Service) { }

  parseData = {};

  ngOnInit() {
    this.d3Service.getPopulationData().subscribe(
      data => {
        this.parseData = this.d3Service.parseCSVData(data).map(row => ({
          2018: Number(row['2018']),
          name: row['Country Name']
        }));
        console.log(this.parseData)
      },
      error => {
        console.log(error);
      }
    );
  }

}
