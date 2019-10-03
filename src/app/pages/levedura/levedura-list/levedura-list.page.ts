import { LeveduraService } from './../../../services/levedura.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levedura-list',
  templateUrl: './levedura-list.page.html',
  styleUrls: ['./levedura-list.page.scss'],
})
export class LeveduraListPage implements OnInit {

  
  lupulosData: any;

  constructor(public lupService: LeveduraService, public toastController: ToastController) {
    this.lupulosData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllLupulos(); console.log("ooo");
  }

  getAllLupulos() {
    //Get saved list of students
    this.lupService.getList().subscribe(response => {
    console.log(response);
      this.lupulosData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.lupService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllLupulos();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Lúpulo excluído com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
