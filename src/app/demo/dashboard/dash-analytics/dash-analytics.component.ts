import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from '../../../theme/shared/components/card/card.component';
import { ApexChartComponent } from '../../../theme/shared/components/chart/apex-chart/apex-chart.component';
import { ChartDB } from '../../../data/chart-data';

@Component({
  selector: 'app-dash-analytics',
  standalone: true,
  imports: [CommonModule, NgbProgressbarModule, CardComponent, ApexChartComponent],
  templateUrl: './dash-analytics.component.html',
  styleUrls: ['./dash-analytics.component.scss']
})
export class DashAnalyticsComponent implements OnInit {
  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;
  public dailyVisitorChartOptions: any;

  constructor() {
    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';

    this.deviceProgressBar = [
      {
        type: 'success',
        value: 66
      }, {
        type: 'primary',
        value: 26
      }, {
        type: 'danger',
        value: 8
      }
    ];

    // Configure the daily visitor chart options
    this.dailyVisitorChartOptions = {
      chart: {
        height: 320,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [
        {
          name: 'Visitors',
          data: [32, 38, 36, 35, 38, 37, 35, 36, 38, 39, 40, 36, 35, 36, 38, 35, 36, 37, 38, 34, 30, 29, 27, 29, 30, 33, 35, 36, 37, 39, 40, 36, 35, 36, 37, 38, 40, 42, 44, 46]
        }
      ],
      xaxis: {
        categories: Array.from({ length: 40 }, (_, i) => i + 1)
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0.2,
        }
      }
    };
  }

  ngOnInit() {}
}
