import { AguaService } from './../../../services/agua.service';
import { Agua } from './../../../models/agua';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agua-edit',
  templateUrl: './agua-edit.page.html',
  styleUrls: ['./agua-edit.page.scss'],
})
export class AguaEditPage implements OnInit {

  id: number;
  data: Agua;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public aguService: AguaService,
    public toastController: ToastController
  ) {
    this.data = new Agua();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.aguService.getItem(this.id).subscribe(response => {
      //console.log(response);
      this.data = response;
    })
  }
  update() {
    //Update item by taking id and updated data object
    this.aguService.updateItem(this.id, this.data).subscribe(response => {
      this.presentToast();
      this.router.navigate(['agua-list']);
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Água alterada com sucesso!',
      duration: 3000
    });
    toast.present();
  }
}


