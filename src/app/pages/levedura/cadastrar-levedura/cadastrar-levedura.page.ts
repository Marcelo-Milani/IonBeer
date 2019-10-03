import { LeveduraService } from './../../../services/levedura.service';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { Levedura } from '../../../models/levedura';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-levedura',
  templateUrl: './cadastrar-levedura.page.html',
  styleUrls: ['./cadastrar-levedura.page.scss'],
})
export class CadastrarLeveduraPage implements OnInit {

  data: Levedura;

  constructor(
    public levService: LeveduraService,
    public router: Router,
    public toastController: ToastController ) {
    this.data = new Levedura();
  }

  ngOnInit() {
  }

  submitForm() {
    console.log("passei no submit levedura")
    this.levService.createItem(this.data).subscribe((response) => {
      console.log(response);
      this.presentToast();
      this.router.navigate(['levedura-list']);
    });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Levedura cadastrada com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
