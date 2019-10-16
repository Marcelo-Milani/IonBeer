import { Component, OnInit } from '@angular/core';
import { ReceitaService } from './../../../services/receita.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-receitas-list',
  templateUrl: './receitas-list.page.html',
  styleUrls: ['./receitas-list.page.scss'],
})
export class ReceitasListPage implements OnInit {

  receitasData: any;

  constructor(public recService: ReceitaService, 
    public toastController: ToastController) {
    this.receitasData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllReceitas();
  }

 async getAllReceitas() {
    //Get saved list of students
    this.recService.getList().subscribe(response => {
    console.log(response);
      this.receitasData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.recService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllReceitas();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Receita excluída com sucesso!',
      duration: 3000
    });
    toast.present();
  }
}