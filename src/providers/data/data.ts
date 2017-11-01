import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  myData = {
      "listItems": [
          {listName:    "milk"},
          {listName:    "buttermilk"},
          {listName:    "coconut"},
          {listName:    "butt butter"},
      ]
  };

  constructor() {
    console.log('Hello DataProvider Provider');
  }


  getData():Object {
    return this.myData.listItems;
  }

}
