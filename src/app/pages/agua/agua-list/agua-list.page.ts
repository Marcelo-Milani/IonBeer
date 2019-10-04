import { AguaService } from './../../../services/agua.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agua-list',
  templateUrl: './agua-list.page.html',
  styleUrls: ['./agua-list.page.scss'],
})
export class AguaListPage implements OnInit {

 aguasData: any;

  constructor(
    public aguService: AguaService, 
    public toastController: ToastController) {
    this.aguasData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllAguas(); console.log("ooo");
  }

  getAllAguas() {
    //Get saved list of students
    this.aguService.getList().subscribe(response => {
    console.log(response);
      this.aguasData = response;
    })
  }


  delete(item) {
    //Delete item in Agua data
    this.aguService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllAguas();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Água excluída com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
