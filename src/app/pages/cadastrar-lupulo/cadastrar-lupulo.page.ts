import { Lupulo } from './../../models/lupulo';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { toastController } from '@ionic/core';


@Component({
  selector: 'app-cadastrar-lupulo',
  templateUrl: './cadastrar-lupulo.page.html',
  styleUrls: ['./cadastrar-lupulo.page.scss'],
})
export class CadastrarLupuloPage implements OnInit {

  model: Lupulo;
  lupulo = [];

  ngOnInit() { }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    this.model = new Lupulo();

  }
  async cadastrar() {
    if (this.model.nome!='' && this.model.alpha != undefined && this.model.beta != undefined) {
      this.lupulo.push(this.model.nome);
      this.lupulo.push(this.model.alpha);
      this.lupulo.push(this.model.beta);
      //this.Lupulo.push(this.lupulo);
      console.log(this.lupulo);
      alert(this.lupulo);

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
