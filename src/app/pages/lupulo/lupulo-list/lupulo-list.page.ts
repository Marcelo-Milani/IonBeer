import { LupuloService } from './../../../services/lupulo.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lupulo-list',
  templateUrl: './lupulo-list.page.html',
  styleUrls: ['./lupulo-list.page.scss'],
})
export class LupuloListPage implements OnInit {

  lupulosData: any;
 
  constructor(public lupService: LupuloService,public toastController: ToastController) {
    this.lupulosData = [];
  }
 
  ngOnInit() {
  }

  ionViewWillEnter(){    
    this.getAllStudents();console.log("ooo");
  }
 
  getAllStudents() {
    //Get saved list of students
    this.lupService.getList().subscribe(response => {
      //console.log(response);
      this.lupulosData = response;
    })
  }
 
 
  delete(item) {
    //Delete item in Student data
    this.lupService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.presentToast();
      this.getAllStudents();
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
