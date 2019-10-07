import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/models/receita';
import { ReceitaService } from 'src/app/services/receita.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-receitas',
  templateUrl: './cadastrar-receitas.page.html',
  styleUrls: ['./cadastrar-receitas.page.scss'],
})
export class CadastrarReceitasPage implements OnInit {

  data: Receita;

  constructor(
    public recService: ReceitaService,
    public router: Router,
    public toastController: ToastController ) {
    this.data = new Receita();
  }

  ngOnInit() {
  }

  submitForm() {
    console.log("passei no submit levedura")
    this.recService.createItem(this.data).subscribe((response) => {
      console.log(response);
      this.presentToast();
      this.router.navigate(['receitas-list']);
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
