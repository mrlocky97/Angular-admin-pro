import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  public labels1: string[] = ['Sales Kinder', 'Sales Milka', 'Sales Colacao'];
  public data1: number[] = [350, 350, 300];
  public colors1: string[] = ['#FF7B54', '#FFB26B', '#FFD56F'];

  public labels2: string[] = ['Sales shoes', 'Sales t-shirt', 'Sales trousers'];
  public data2: number[] = [550, 400, 50];
  public colors2: string[] = ['#42032C', '#E6D2AA', '#F1EFDC'];

  public labels3: string[] = ['Sales Coca-cola', 'Sales Pepsi', 'Sales Fanta'];
  public data3: number[] = [250, 450, 300];
  public colors3: string[] = ['#3F0071', '#FB2576', '#332FD0'];

  public labels4: string[] = ['Sales facebook', 'Sales Instagram', 'Sales Twitter'];
  public data4: number[] = [100, 700, 200];
  public colors4: string[] = ['#453C67', '#6D67E4', '#46C2CB'];
}
