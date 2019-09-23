import { NavController, AlertController } from '@ionic/angular';
import { Levedura } from './../../models/levedura';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-levedura',
  templateUrl: './cadastrar-levedura.page.html',
  styleUrls: ['./cadastrar-levedura.page.scss'],
})
export class CadastrarLeveduraPage implements OnInit {

  model: Levedura;
  levedura = [];

  ngOnInit() { }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    this.model = new Levedura();

  }
  async cadastrar() {
    if (this.model.nome!='' && this.model.atenuacao != undefined && this.model.tempMin != undefined && this.model.tempMax != undefined ) {
      this.levedura.push(this.model.nome);
      this.levedura.push(this.model.atenuacao);
      this.levedura.push(this.model.tempMin);
      this.levedura.push(this.model.tempMax);
     
      console.log(this.levedura);
      alert(this.levedura);

    } else {
      const alert = this.alertCtrl.create({
        header: 'Aviso',
        subHeader: 'Cadastro',
        message: 'Preencha corretamente todos os dados! ',
        buttons: ['Cancel', 'Ok']
      });

      (await alert).present();
    }
  }

}
