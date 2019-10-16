import { CervejaService } from './../../../services/cerveja.service';
import { Cerveja } from './../../../models/cerveja';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, ToastController, IonList, NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tipo-cerveja',
  templateUrl: './cadastrar-tipo-cerveja.page.html',
  styleUrls: ['./cadastrar-tipo-cerveja.page.scss'],
})
export class CadastrarTipoCervejaPage implements OnInit {

  data: Cerveja;

  constructor(
    public cevaService: CervejaService,
    public router: Router,
    public toastController: ToastController) {
    this.data = new Cerveja();
  }

  ngOnInit() {
  }

  submitForm() {
    this.cevaService.createItem(this.data).subscribe((response) => {
      this.presentToast();
      this.router.navigate(['tipo-cerveja-list']);
    });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cerveja cadastrada com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
