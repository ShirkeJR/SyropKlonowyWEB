import {DataViewValue} from './DataViewValue.model';

export class DataView {
  data: DataViewValue[];

  constructor(val: string) {
    this.data = [new DataViewValue(val, val), new DataViewValue(val, val)];
  }
}
