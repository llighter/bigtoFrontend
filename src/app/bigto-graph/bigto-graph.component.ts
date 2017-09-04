import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-bigto-graph',
  templateUrl: './bigto-graph.component.html',
  styleUrls: ['./bigto-graph.component.css']
})
export class BigtoGraphComponent implements OnInit {
  @ViewChild('myChart') myChart;

  constructor() { }

  ngOnInit() {
    this.myChart = new Chart(this.myChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
          label: '# of card in use',
          data: [12,13,14,15,16],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2
        },
          {
            label: '# of Remaining card',
            data: [2,3,4,5,6],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
          }],
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero:true
            },
            stacked: true,
          }],
        },
        responsive: true
      }
    });
  }

}
