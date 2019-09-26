import { Malte } from '../../../models/malte';
import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-malte',
  templateUrl: './cadastrar-malte.page.html',
  styleUrls: ['./cadastrar-malte.page.scss'],
})
export class CadastrarMaltePage implements OnInit {
  model: Malte;
  malte = [];

  ngOnInit() { }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    this.model = new Malte();

  }
  async cadastrar() {
    if (this.model.nome != '' && this.model.cor != undefined && this.model.potencial != undefined) {
      this.malte.push(this.model.nome);
      this.malte.push(this.model.cor);
      this.malte.push(this.model.potencial);
      
      console.log(this.malte);
      alert(this.malte);

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
