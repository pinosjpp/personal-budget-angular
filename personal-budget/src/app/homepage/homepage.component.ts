import {Component, Renderer2, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  @ViewChild('myChart')
  myChartRef!: ElementRef;

  public dataSource = {
    datasets: [
          {
            data: [''],
              backgroundColor: [
                '#ffcd56',
                 '#ff6384',
                '#36a2eb',
                 '#ff00ff',
                '#00ff00',
                '#000080',
                '#00ffff'
              ]
     }
   ],


   labels: ['Eat out',
   'Rent',
   'Groceries',
   'Cellphone',
   'Gas',
   'Insurance',
   'Subscriptions'
]
};
constructor(private http: HttpClient, private renderer: Renderer2, private el: ElementRef) { }

ngOnInit(): void {
  this.http.get('http://localhost:3000/budget')
  .subscribe((res: any) => {
    for (var i = 0; i < res.myBudget.length; i++) {
    // this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
    // this.dataSource.labels[i] = res.myBudget[i].title;

    this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
    this.dataSource.labels[i] = res.myBudget[i].title;
    }
      this.createChart();
  });

}


createChart() {
  if (this.myChartRef && this.myChartRef.nativeElement) {
    const ctx = this.myChartRef.nativeElement.getContext('2d');
    if (ctx) {
      const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
      });
    }
  }
}
}