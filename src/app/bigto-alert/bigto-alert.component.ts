import {Component, Input, OnInit} from '@angular/core';
import {Spec} from "../core/models/spec";

@Component({
  selector: 'app-bigto-alert',
  templateUrl: './bigto-alert.component.html',
  styleUrls: ['./bigto-alert.component.css']
})
export class BigtoAlertComponent implements OnInit {

  @Input()
  spec: Spec;

  constructor() { }

  ngOnInit() {
  }

}
