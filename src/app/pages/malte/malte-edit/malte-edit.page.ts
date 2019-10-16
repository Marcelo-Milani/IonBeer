import { MalteService } from './../../../services/malte.service';
import { Malte } from './../../../models/malte';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-malte-edit',
  templateUrl: './malte-edit.page.html',
  styleUrls: ['./malte-edit.page.scss'],
})
export class MalteEditPage implements OnInit {

  id: number;
  data: Malte;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public maltService: MalteService,
    public toastController: ToastController
  ) {
    this.data = new Malte();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.maltService.getItem(this.id).subscribe(response => {
      //console.log(response);
      this.data = response;
    })
  }
  update() {
    //Update item by taking id and updated data object
    this.maltService.updateItem(this.id, this.data).subscribe(response => {
      this.presentToast();
      
    })
    this.router.navigate(['malte-list']);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Lúpulo alterado com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
