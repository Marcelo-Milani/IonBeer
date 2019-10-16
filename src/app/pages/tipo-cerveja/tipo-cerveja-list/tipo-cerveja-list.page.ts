import { CervejaService } from './../../../services/cerveja.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tipo-cerveja-list',
  templateUrl: './tipo-cerveja-list.page.html',
  styleUrls: ['./tipo-cerveja-list.page.scss'],
})
export class TipoCervejaListPage implements OnInit {

 cervejasData: any;

  constructor(
    public cevaService: CervejaService, 
    public toastController: ToastController) {
    this.cervejasData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllCervejas();
  }

  getAllCervejas() {
    //Get saved list of students
    this.cevaService.getList().subscribe(response => {
    console.log(response);
      this.cervejasData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.cevaService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllCervejas();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cerveja excluída com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
