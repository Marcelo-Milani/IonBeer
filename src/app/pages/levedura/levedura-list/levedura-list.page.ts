import { LeveduraService } from './../../../services/levedura.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-levedura-list',
  templateUrl: './levedura-list.page.html',
  styleUrls: ['./levedura-list.page.scss'],
})
export class LeveduraListPage implements OnInit {

  
  levedurasData: any;

  constructor(public lupService: LeveduraService, public toastController: ToastController) {
    this.levedurasData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllLeveduras(); console.log("ooo");
  }

  getAllLeveduras() {
    //Get saved list of students
    this.lupService.getList().subscribe(response => {
    console.log(response);
      this.levedurasData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.lupService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllLeveduras();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Levedura excluída com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
