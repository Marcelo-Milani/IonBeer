import { LeveduraService } from './../../../services/levedura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Levedura } from './../../../models/levedura';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-levedura-edit',
  templateUrl: './levedura-edit.page.html',
  styleUrls: ['./levedura-edit.page.scss'],
})
export class LeveduraEditPage implements OnInit {

  id: number;
  data: Levedura;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public levService: LeveduraService,
    public toastController: ToastController
  ) {
    this.data = new Levedura();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.levService.getItem(this.id).subscribe(response => {
      //console.log(response);
      this.data = response;
    })
  }
  update() {
    //Update item by taking id and updated data object
    this.levService.updateItem(this.id, this.data).subscribe(response => {
      this.presentToast();
      this.router.navigate(['levedura-list']);
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Levedura alterada com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
