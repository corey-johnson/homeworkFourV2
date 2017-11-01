import { Component } from '@angular/core';
import { NavController} from "ionic-angular"
import { DataProvider} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    animeLists: any;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {


      }

    ionViewDidLoad() {
        this.animeLists = this.dataService.animeLists;


      // this.animeLists = this.dataService.animeLists;
    }

}
