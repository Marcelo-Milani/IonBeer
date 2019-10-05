import { LupuloService } from './../../../services/lupulo.service';
import { Lupulo } from './../../../models/lupulo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lupulo-edit',
  templateUrl: './lupulo-edit.page.html',
  styleUrls: ['./lupulo-edit.page.scss'],
})
export class LupuloEditPage implements OnInit {

  id: number;
  data: Lupulo;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public lupService: LupuloService,
    public toastController: ToastController
  ) {
    this.data = new Lupulo();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.lupService.getItem(this.id).subscribe(response => {
      //console.log(response);
      this.data = response;
    })
  }
 async update() {
    //Update item by taking id and updated data object
    this.lupService.updateItem(this.id, this.data).subscribe(response => {
      this.presentToast();
      this.router.navigate(['lupulo-list']);
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Lúpulo alterado com sucesso!',
      duration: 3000
    });
    toast.present();
  }
}
