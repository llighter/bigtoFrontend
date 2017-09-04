export class Spec {
  krmodel: string;
  gb: string;
  conditions: string;
  changes: string;

  constructor(krmodel: string, gb: string, conditions: string, changes: string) {
    this.krmodel = krmodel;
    this.gb = gb;
    this.conditions = conditions;
    this.changes = changes;
  }


}
