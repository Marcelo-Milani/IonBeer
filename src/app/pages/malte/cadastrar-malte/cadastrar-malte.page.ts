import { Malte } from '../../../models/malte';
import { NavController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-malte',
  templateUrl: './cadastrar-malte.page.html',
  styleUrls: ['./cadastrar-malte.page.scss'],
})
export class CadastrarMaltePage implements OnInit {
  data: Malte;
  malte = [];

  ngOnInit() { }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    this.data = new Malte();

  }
  async cadastrar() {
    if (this.data.nome != '' && this.data.cor != undefined && this.data.potencial != undefined) {
      this.malte.push(this.data.nome);
      this.malte.push(this.data.cor);
      this.malte.push(this.data.potencial);
      
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
