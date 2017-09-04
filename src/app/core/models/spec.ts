export class Spec {
  private _krmodel: string;
  private _gb: string;
  private _conditions: string;
  private _changes: string;

  constructor(krmodel: string, gb: string, conditions: string, changes: string) {
    this._krmodel = krmodel;
    this._gb = gb;
    this._conditions = conditions;
    this._changes = changes;
  }


  set krmodel(value: string) {
    this._krmodel = value;
  }

  set gb(value: string) {
    this._gb = value;
  }

  set conditions(value: string) {
    this._conditions = value;
  }

  set changes(value: string) {
    this._changes = value;
  }
}
