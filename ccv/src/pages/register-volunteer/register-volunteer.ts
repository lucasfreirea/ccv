import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterVolunteerModel } from './register-volunteer.model';

@Component({
    selector: 'page-register-volunteer',
    templateUrl: 'register-volunteer.html'
})
export class RegisterVolunteePage {

    public model: RegisterVolunteerModel = {
        nome_completo: '',
        data_nascimento: '',
        email: '',
        telefone: '',
        departamento: '',
        extensao: '',
        profissao: ''
    };

    constructor(public navCtrl: NavController) {
    }

    alert() {
        alert(JSON.stringify(this.model));
    }
}
