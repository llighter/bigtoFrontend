import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {BigtoService} from "../shared/bigto.service";
import {Spec} from "../core/models/spec";
import {chartColors} from "../shared/colors";
import {DatePipe} from "@angular/common";
import {isNullOrUndefined} from "util";



@Component({
  selector: 'app-bigto-graph',
  templateUrl: './bigto-graph.component.html',
  styleUrls: ['./bigto-graph.component.css']
})
export class BigtoGraphComponent implements OnInit {
  @ViewChild('myChart') myChart;

  mySpec: Spec;
  mySpecList: Array<Spec>;
  datePipe: DatePipe;
  type: number;

  krmodels: Array<string>;
  gbs: Array<string>;
  conditions: Array<string>;
  changes: Array<string>;

  // 전체 날짜 범위
  start_date: string;
  end_date: string;

  // 현재 검색하는 날짜 범위
  current_start_date: string;
  current_end_date: string;

  colorNames = Object.keys(chartColors);

  config:any = {
    type: 'line',
    data: {
      labels: [],
      datasets: []
    },
    options: {
      responsive: true,
      title: {
        display:true,
        text:'일자별 평균가격'
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
  };

  constructor(private bigtoService: BigtoService) { }

  ngOnInit() {
    this.type = 1;

    this.mySpec = new Spec('', '', '', '');
    this.mySpecList = new Array<Spec>();
    this.datePipe = new DatePipe('en-US');

    this.bigtoService.getKrmodels().subscribe(data => {
      this.krmodels = data['krnameList'];
      console.log(data);
    });

    this.myChart = new Chart(this.myChart.nativeElement, this.config);
  }

  add() {
    this.bigtoService.getDateLabels(this.start_date, this.end_date).subscribe(data => {
      this.config.data.labels = data['labels'];
    });

    this.bigtoService.getAveragePricePerDayWithRange(this.mySpec, this.current_start_date, this.current_end_date)
        .subscribe(data => {
      const colorName = this.colorNames[this.config.data.datasets.length % this.colorNames.length];
      const newColor = chartColors[colorName];
      const newDataSet = {
        type: 'line',
        label: this.mySpec.krmodel,
        backgroundColor: newColor,
        borderColor: newColor,
        data: data['data'],
        fill: false
      };

      this.config.data.datasets.push(newDataSet);
      this.mySpecList.push(new Spec(this.mySpec.krmodel, this.mySpec.gb, this.mySpec.conditions, this.mySpec.changes));
      this.myChart.update();
    });

    console.log(`${this.start_date}, ${this.end_date}, current: ${this.current_start_date}, ${this.current_end_date}`);
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

  // onSelectChanges() {
  //   this.bigtoService.getDateRange(this.mySpec.krmodel, this.mySpec.gb, this.mySpec.conditions, this.mySpec.changes)
  //     .subscribe(data => {
  //       this.start_date = data['dateRange']['start_date'];
  //       this.end_date = data['dateRange']['end_date'];
  //     });
  // }

  onStart(e) {
    this.current_start_date = this.datePipe.transform(e.target.value, 'yyyy-MM-dd');
    if (this.current_start_date < this.start_date || isNullOrUndefined(this.start_date)) {
      this.start_date = this.current_start_date;
    }
  }

  onEnd(e) {
    this.current_end_date = this.datePipe.transform(e.target.value, 'yyyy-MM-dd');
    if (this.current_end_date > this.end_date || isNullOrUndefined(this.end_date)) {
      this.end_date = this.current_end_date;
    }
  }

  onSelectType() {
    console.log(`type is ${this.type}`);
  }

}
