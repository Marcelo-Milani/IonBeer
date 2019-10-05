import { CervejaService } from './../../../services/cerveja.service';
import { Cerveja } from './../../../models/cerveja';
import { MalteService } from './../../../services/malte.service';
import { Malte } from './../../../models/malte';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tipo-cerveja-edit',
  templateUrl: './tipo-cerveja-edit.page.html',
  styleUrls: ['./tipo-cerveja-edit.page.scss'],
})
export class TipoCervejaEditPage implements OnInit {

  id: number;
  data: Cerveja;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public cevaService: CervejaService,
    public toastController: ToastController
  ) {
    this.data = new Cerveja();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.cevaService.getItem(this.id).subscribe(response => {
      //console.log(response);
      this.data = response;
    })
  }
  update() {
    //Update item by taking id and updated data object
    this.cevaService.updateItem(this.id, this.data).subscribe(response => {
      this.presentToast();

    })
    this.router.navigate(['tipo-cerveja-list']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cerveja alterado com sucesso!',
      duration: 3000
    });
    toast.present();
  }


}
