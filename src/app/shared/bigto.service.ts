import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Spec} from "../core/models/spec";

@Injectable()
export class BigtoService {
  API_URL:string = `http://35.200.122.168`;

  constructor(private http: HttpClient) { }

  getKrmodels(): Observable<Array<string>> {
    return this.http.get(`${this.API_URL}/bigto3/krnameList.do`);
  }

  getGbs(krname: string): Observable<Array<string>> {
    return this.http.get(`${this.API_URL}/bigto3/gbList.do?krname=${krname}`);
  }

  getConditions(krname: string, gb: string): Observable<Array<string>> {
    return this.http.get(`${this.API_URL}/bigto3/conditionsList.do?krname=${krname}&gb=${gb}`);
  }

  getChanges(krname: string, gb: string, conditions: string): Observable<Array<string>> {
    return this.http.get(`${this.API_URL}/bigto3/changesList.do?krname=${krname}&gb=${gb}&conditions=${conditions}`);
  }

  getAveragePricePerDay(mySpec: Spec): Observable<any> {
    return this.http.get(`${this.API_URL}/bigto3/query_line_phone.do?krname=${mySpec.krmodel}&gb=${mySpec.gb}&conditions=${mySpec.conditions}&changes=${mySpec.changes}`);
  }

}
