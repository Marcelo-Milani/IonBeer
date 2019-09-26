import { Agua } from '../../../models/agua';
import { Component, OnInit, ViewChild } from '@angular/core';
//import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-agua',
  templateUrl: './cadastrar-agua.page.html',
  styleUrls: ['./cadastrar-agua.page.scss'],
})
export class CadastrarAguaPage implements OnInit {

  model: Agua;
  agua = [];

  ngOnInit() { }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    this.model = new Agua();

  }
  async cadastrar() {
    if (this.model.origem!='' && this.model.ph != undefined && this.model.calcio != undefined && this.model.sodio != undefined && this.model.magnesio != undefined && this.model.sodio != undefined && this.model.sulfato != undefined && this.model.bicarbonato != undefined) {
      this.agua.push(this.model.origem);
      this.agua.push(this.model.ph);
      this.agua.push(this.model.calcio);
      this.agua.push(this.model.magnesio);
      this.agua.push(this.model.sodio);
      this.agua.push(this.model.magnesio);
      this.agua.push(this.model.bicarbonato);
     
      console.log(this.agua);
      alert(this.agua);

    } else {
      const alert = this.alertCtrl.create({
        header: 'Aviso',
        subHeader: 'Cadastro',
        message: 'Preencha corretamente todos os dados! ',
        buttons: ['Cancel', 'Ok']
      });

      (await alert).present();
    }
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
  
 

