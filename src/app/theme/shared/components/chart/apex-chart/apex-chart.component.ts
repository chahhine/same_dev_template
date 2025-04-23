import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTheme,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  legend: ApexLegend;
  markers: ApexMarkers;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-apex-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <div id="chart" [ngStyle]="chartStyle">
      <apx-chart
        [series]="chartConfig.series"
        [chart]="chartConfig.chart"
        [xaxis]="chartConfig.xaxis"
        [stroke]="chartConfig.stroke"
        [tooltip]="chartConfig.tooltip"
        [dataLabels]="chartConfig.dataLabels"
        [plotOptions]="chartConfig.plotOptions"
        [fill]="chartConfig.fill"
        [legend]="chartConfig.legend"
        [markers]="chartConfig.markers"
        [yaxis]="chartConfig.yaxis"
        [colors]="chartConfig.colors"
        [title]="chartConfig.title"
      ></apx-chart>
    </div>
  `,
  styles: []
})
export class ApexChartComponent implements OnInit {
  @Input() chartID: string;
  @Input() chartConfig: any;
  @Input() xAxis: any;
  @Input() chartStyle = {};

  constructor() { }

  ngOnInit() {
    if (this.xAxis) {
      this.chartConfig.xaxis = this.xAxis;
    }
  }
}
