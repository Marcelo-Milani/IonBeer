import { LupuloService } from './../../../services/lupulo.service';
import { Lupulo } from '../../../models/lupulo';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastrar-lupulo',
  templateUrl: './cadastrar-lupulo.page.html',
  styleUrls: ['./cadastrar-lupulo.page.scss'],
})
export class CadastrarLupuloPage implements OnInit {
  
  data: Lupulo;
 
  constructor(
      public lupService: LupuloService,
      public router: Router,
      public toastController: ToastController) {
    this.data = new Lupulo();
  }
 
  ngOnInit() {
  }
 
 async submitForm() {
    this.lupService.createItem(this.data).subscribe((response) => {
      this.presentToast();
      this.router.navigate(['lupulo-list']);
    });
 
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Lúpulo cadastrado com sucesso!',
      duration: 3000
    });
    toast.present();
  }
}
  