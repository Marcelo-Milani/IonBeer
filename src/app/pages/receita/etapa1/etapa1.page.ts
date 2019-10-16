import { Component, OnInit } from '@angular/core';
import { Receita } from '../../../models/receita';
import { CervejaService } from './../../../services/cerveja.service';

@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.page.html',
  styleUrls: ['./etapa1.page.scss'],
})
export class Etapa1Page implements OnInit {
  data: Receita;
  cervejaData: any;

  constructor( public cervService: CervejaService,) {
    this.data = new Receita();
    this.cervejaData = [];  
  }
 
  ngOnInit() {
    this.getAllCervejas();
  }

  async getAllCervejas() {
    this.cervService.getList().subscribe(response => {
      //console.log(response);
      this.cervejaData = response;
    })
  }
  ionViewWillEnter(){
    if(localStorage.getItem("myReceita") != null){
        this.data = JSON.parse(localStorage.getItem('myReceita'));
        console.log("Did data load 1? : ",this.data);
        localStorage.removeItem('myReceita');
    }
    
  }

  ionViewWillLeave(){
    localStorage.setItem('myReceita',JSON.stringify(this.data));
  }

 
}