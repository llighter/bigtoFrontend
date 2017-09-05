import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Spec} from "../core/models/spec";

@Injectable()
export class BigtoService {
  API_URL:string = `http://35.194.101.61/bigto3`;
  // API_URL:string = `http://localhost:8050`;

  constructor(private http: HttpClient) { }

  getKrmodels(): Observable<Array<string>> {
    return this.http.get(`${this.API_URL}/krnameList.do`);
  }

  getGbs(krname: string): Observable<Array<string>> {
    return this.http.get(`${this.API_URL}/gbList.do?krname=${krname}`);
  }

  getConditions(krname: string, gb: string): Observable<Array<string>> {
    return this.http.get(`${this.API_URL}/conditionsList.do?krname=${krname}&gb=${gb}`);
  }

  getChanges(krname: string, gb: string, conditions: string): Observable<Array<string>> {
    return this.http.get(`${this.API_URL}/changesList.do?krname=${krname}&gb=${gb}&conditions=${conditions}`);
  }

  getDateLabels(start_date: string, end_date: string): Observable<string> {
    return this.http.get(`${this.API_URL}/dateLabels.do?start_date=${start_date}&end_date=${end_date}`);
  }

  getDateRange(krname: string, gb: string, conditions: string, changes: string): Observable<Array<Date>> {
    return this.http.get(`${this.API_URL}/dateRange.do?krname=${krname}&gb=${gb}&conditions=${conditions}&changes=${changes}`);
  }

  getAveragePricePerDay(mySpec: Spec): Observable<any> {
    return this.http.get(`${this.API_URL}/query_line_phone.do?krname=${mySpec.krmodel}&gb=${mySpec.gb}&conditions=${mySpec.conditions}&changes=${mySpec.changes}`);
  }

  getAveragePricePerDayWithRange(mySpec: Spec, start_date: string, end_date: string): Observable<any> {
    return this.http.get(`${this.API_URL}/query_line_phone_range.do?krname=${mySpec.krmodel}&gb=${mySpec.gb}&conditions=${mySpec.conditions}&changes=${mySpec.changes}&start_date=${start_date}&end_date=${end_date}`);
  }

}
