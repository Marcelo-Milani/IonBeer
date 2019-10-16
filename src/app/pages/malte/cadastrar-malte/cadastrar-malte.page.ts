import { Router } from '@angular/router';
import { MalteService } from './../../../services/malte.service';
import { Malte } from '../../../models/malte';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-malte',
  templateUrl: './cadastrar-malte.page.html',
  styleUrls: ['./cadastrar-malte.page.scss'],
})
export class CadastrarMaltePage implements OnInit {

  data: Malte;

    constructor(
      public maltService: MalteService,
      public router: Router,
      public toastController: ToastController) {
      this.data = new Malte();
    }

    ngOnInit() {
    }

    submitForm() {
      console.log("passei no submit form")
      this.maltService.createItem(this.data).subscribe((response) => {
        console.log(response);
        this.presentToast();
        
      });
      this.router.navigate(['malte-list']);
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Malte cadastrado com sucesso!',
        duration: 3000
      });
      toast.present();
    }

  }
