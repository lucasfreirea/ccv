import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    constructor(public navCtrl: NavController, private emailComposer: EmailComposer) {
    }

    emailToGC() {
        let email = {
            app: 'gmail',
            to: 'videira GC',
            subject: 'Quero um GC!',
            body: 'Teste mensagem',
            isHtml: true
        };
        this.emailComposer.addAlias('gmail', 'com.google.android.gm');
        this.emailComposer.open(email);
    }

    emailToServir() {
        let email = {
            app: 'gmail',
            to: 'videira Servir',
            subject: 'Quero Servir!',
            body: 'Teste mensagem',
            isHtml: true
        };
        this.emailComposer.addAlias('gmail', 'com.google.android.gm');
        this.emailComposer.open(email);
    }

}
