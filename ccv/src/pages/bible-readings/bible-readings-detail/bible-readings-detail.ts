import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-bible-readings-detail',
    templateUrl: 'bible-readings-detail.html'
})
export class BibleReadingsDetailPage {

    constructor(public navCtrl: NavController) {
    }

    public cardClicked: boolean = false; //Whatever you want to initialise it as
    public cardClicked2: boolean = false; //Whatever you want to initialise it as
    public cardClicked3: boolean = false; //Whatever you want to initialise it as

    public onCardClicked() {

        this.cardClicked = !this.cardClicked;
    }

    public onCardClicked2() {

        this.cardClicked2 = !this.cardClicked2;
    }

    public onCardClicked3() {

        this.cardClicked3 = !this.cardClicked3;
    }

}
