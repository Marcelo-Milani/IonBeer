import { CervejaService } from './../../../services/cerveja.service';
import { Cerveja } from './../../../models/cerveja';
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
  model: Cerveja;
  cervejasData: any;
  tipo: any;

  constructor(
    public recService: ReceitaService,
    public cevaService: CervejaService,
    public router: Router,
    public toastController: ToastController) {
    this.data = new Receita();
    this.model = new Cerveja();
    this.cervejasData = [];
  }


ngOnInit() {
}
ionViewWillEnter() {
  this.getAllCervejas();
}

selectTipo(event){
  this.tipo = event.detail.value;
  console.log(event);
  console.log(this.tipo);
}

submitForm() {
  console.log("passei no submit receita")
  this.recService.createItem(this.data).subscribe((response) => {
    console.log(response);
    this.presentToast();
    this.router.navigate(['receitas-list']);
  });

}

async getAllCervejas() {
  //Get saved list of students
  this.cevaService.getList().subscribe(response => {
    console.log(response);
    this.cervejasData = response;
  })
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Receita cadastrada com sucesso!',
    duration: 3000
  });
  toast.present();
}

}
