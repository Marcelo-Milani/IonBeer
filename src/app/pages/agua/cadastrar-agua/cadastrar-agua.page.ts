import { AguaService } from './../../../services/agua.service';
import { Agua } from '../../../models/agua';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, ToastController, IonList, NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-agua',
  templateUrl: './cadastrar-agua.page.html',
  styleUrls: ['./cadastrar-agua.page.scss'],
})
export class CadastrarAguaPage implements OnInit {

  data: Agua;

  constructor(
    public aguService: AguaService,
    public router: Router,
    public toastController: ToastController ) {
    this.data = new Agua();
  }

  ngOnInit() {
  }

  submitForm() {
    this.aguService.createItem(this.data).subscribe((response) => {
      console.log(response);
      this.presentToast();
      this.router.navigate(['agua-list']);
    });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Agua cadastrada com sucesso!',
      duration: 3000
    });
    toast.present();
  }
}
