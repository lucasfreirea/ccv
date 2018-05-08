import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterGcModel } from './register-gc.model';

@Component({
    selector: 'page-register-gc',
    templateUrl: 'register-gc.html'
})
export class RegisterGcPage {

    public model: RegisterGcModel = {
        nome_completo: '',
        data_nascimento: '',
        bairro: '',
        estado_civil: '',
        email: '',
        dias_gc: '',
        telefone: '',
        sexo: '',
        grupo_crescimento: ''
    };

    constructor(public navCtrl: NavController) {
    }

    alert() {
        alert(JSON.stringify(this.model));
    }
}
