import { AguaService } from './../../../services/agua.service';
import { Agua } from '../../../models/agua';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, ToastController, IonList, NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-agua',
  templateUrl: './cadastrar-agua.page.html',
  styleUrls: ['./cadastrar-agua.page.scss'],
})
export class CadastrarAguaPage implements OnInit {

  data: Agua;

  constructor(
    public aguService: AguaService,
    public router: Router,
    public toastController: ToastController ) {
    this.data = new Agua();
  }

  ngOnInit() {
  }

  submitForm() {
    this.aguService.createItem(this.data).subscribe((response) => {
      console.log(response);
      this.presentToast();
      this.router.navigate(['agua-list']);
    });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Agua cadastrada com sucesso!',
      duration: 3000
    });
    toast.present();
  }
}
//   aguas : Item[]=[];

//   newAgua: Item = <Item>{};

//  @ViewChild('mylist')mylist: IonList;

   
//     this.plt.ready().then(() => {
//       this.loadItems();
//     });
//   }
//   // CREATE
//   addItem() {
//     this.newItem.modified = Date.now();
//     this.newItem.id = Date.now();

//     this.storageService.addItem(this.newItem).then(item => {
//       this.newItem = <Item>{};
//       this.showToast('Item added!')
//       this.loadItems(); // Or add it to the array directly
//     });
//   }

//   // READ
//   loadItems() {
//     this.storageService.getItems().then(items => {
//       this.items = items;
//     });
//   }

//   // UPDATE
//   updateItem(item: Item) {
//     item.title = `UPDATED: ${item.title}`;
//     item.modified = Date.now();

//     this.storageService.updateItem(item).then(item => {
//       this.showToast('Item updated!');
//       this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
//       this.loadItems(); // Or update it inside the array directly
//     });
//   }

//   // DELETE
//   deleteItem(item: Item) {
//     this.storageService.deleteItem(item.id).then(item => {
//       this.showToast('Item removed!');
//       this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
//       this.loadItems(); // Or splice it from the array directly
//     });
//   }

//   // Helper
//   async showToast(msg) {
//     const toast = await this.toastController.create({
//       message: msg,
//       duration: 2000
//     });
//     toast.present();
  
 

