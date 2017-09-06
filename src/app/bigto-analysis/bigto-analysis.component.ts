import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bigto-analysis',
  templateUrl: './bigto-analysis.component.html',
  styleUrls: ['./bigto-analysis.component.css']
})
export class BigtoAnalysisComponent implements OnInit {
  numberOfReport: number;

  constructor() { }

  ngOnInit() {
    this.numberOfReport = 1;
  }

  select(index: number) {
    this.numberOfReport = index;
  }

}
