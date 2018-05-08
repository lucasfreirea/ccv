import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BibleReadingsDetailPage } from './bible-readings-detail/bible-readings-detail';

@Component({
    selector: 'page-bible-readings',
    templateUrl: 'bible-readings.html'
})
export class BibleReadingsPage {

    constructor(public navCtrl: NavController) {
    }

    DetailReading() {
        this.navCtrl.push(BibleReadingsDetailPage);
    }

}
