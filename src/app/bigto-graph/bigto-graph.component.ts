import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {BigtoService} from "../shared/bigto.service";
import {Spec} from "../core/models/spec";

@Component({
  selector: 'app-bigto-graph',
  templateUrl: './bigto-graph.component.html',
  styleUrls: ['./bigto-graph.component.css']
})
export class BigtoGraphComponent implements OnInit {
  @ViewChild('myChart') myChart;

  mySpec: Spec;

  krmodels: Array<string>;
  gbs: Array<string>;
  conditions: Array<string>;
  changes: Array<string>;

  config = {
    type: 'line',
    data: {
      labels: ["8/10", "8/11", "8/12", "8/13", "8/14", "8/15"],
      datasets: [{
        type: 'line',
        label: 'price of X',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      title:{
        display:true,
        text:'X'
      },
      scales: {
        xAxes: [{
          display: true,
        }],
        yAxes: [{
          display: true,
        }]
      },
      annotation: {
        events: ['click'],
      }
    }
  }

  constructor(private bigtoService: BigtoService) { }

  ngOnInit() {
    this.mySpec = new Spec();

    this.bigtoService.getKrmodels().subscribe(data => {
      this.krmodels = data['krnameList'];
      console.log(data);
    });

    if (this.mySpec.krmodel != null) {
      this.bigtoService.getGbs(this.mySpec.krmodel).subscribe(data => {
        this.gbs = data['gbList'];
        console.log(data);
      });
    }

    this.myChart = new Chart(this.myChart.nativeElement, this.config);
  }

  add() {
    this.bigtoService.getAveragePricePerDay(this.mySpec).subscribe(data => {
      this.config.data.labels = data['labels'];
      this.config.data.datasets[0].data = data['data'];

      this.myChart.update();
    });
  }

  onSelectKrmodel() {
    this.bigtoService.getGbs(this.mySpec.krmodel).subscribe(data => {
      this.gbs =  data['gbList'];
      console.log(this.gbs);
    });
  }

  onSelectGb() {
    this.bigtoService.getConditions(this.mySpec.krmodel, this.mySpec.gb).subscribe(data => {{
      this.conditions = data['conditionsList'];
      console.log(this.conditions);
    }});
  }

  onSelectConditions() {
    this.bigtoService.getChanges(this.mySpec.krmodel, this.mySpec.gb, this.mySpec.conditions)
      .subscribe(data => {
        this.changes = data['changesList'];
        console.log(this.changes);
      });
  }

}
