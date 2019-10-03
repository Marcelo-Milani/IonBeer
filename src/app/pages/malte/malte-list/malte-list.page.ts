import { MalteService } from './../../../services/malte.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-malte-list',
  templateUrl: './malte-list.page.html',
  styleUrls: ['./malte-list.page.scss'],
})
export class MalteListPage implements OnInit {

  maltesData: any;
 
  constructor(public maltService: MalteService, public toastController: ToastController) {
    this.maltesData = [];
  }
 
  ngOnInit() {
  }

  ionViewWillEnter(){    
    this.getAllMaltes();
  }
 
  getAllMaltes() {
    //Get saved list of students
    this.maltService.getList().subscribe(response => {
      //console.log(response);
      this.maltesData = response;
    })
  }
 
 
  delete(item) {
    //Delete item in Student data
    this.maltService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllMaltes();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Malte excluído com sucesso!',
      duration: 3000
    });
    toast.present();
  }
 

}
