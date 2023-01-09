import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnChanges{

  @Input("fields") doughnutChartLabels: string[] = ['Default Sales facebook', 'Default Sales Instagram', 'Default Sales Twitter'];
  @Input("title") title:string = "Default Sales";
  @Input("dataValues") dataValues: number[] = [350, 450, 100];
  @Input("colors") colorsValues: string[] = ['#243763', '#FF6E31', '#FFEBB7'];
 
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.dataValues,
        backgroundColor: this.colorsValues
      },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnChanges(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.dataValues,
          backgroundColor: this.colorsValues
        },
      ]
    }
  }

}
