import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ReceitaService } from './../../../services/receita.service';
import { Router } from '@angular/router';
import { Receita } from '../../../models/receita';
import { AguaService } from './../../../services/agua.service';
import { MalteService } from './../../../services/malte.service';
import { LupuloService } from './../../../services/lupulo.service';
import { LeveduraService } from './../../../services/levedura.service';
@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.page.html',
  styleUrls: ['./etapa2.page.scss'],
})
export class Etapa2Page implements OnInit {
  public itensForm: FormGroup;
  data: Receita;
  aguaData: any;
  malteData: any;
  lupuloData: any;
  leveduraData: any;

  constructor(
    public aguService: AguaService,
    public malService: MalteService,
    public lupService: LupuloService,
    public levService: LeveduraService,
    public recService: ReceitaService,
    public toastController: ToastController,
    public router: Router,
    private fb: FormBuilder) { 
      this.aguaData = [];  
      this.malteData = [];  
      this.lupuloData = [];  
      this.leveduraData = [];  
    }

  ionViewWillEnter(){
    this.data = JSON.parse(localStorage.getItem('myReceita'));
    console.log("Did data load? : ",this.data);
    localStorage.removeItem('myReceita');
  
  }


  ionViewWillLeave(){
    this.data.aguas = this.itensForm.controls.aguas.value;
    this.data.maltes = this.itensForm.controls.maltes.value;
    this.data.lupulos = this.itensForm.controls.lupulos.value;
    this.data.leveduras = this.itensForm.controls.leveduras.value;
    
    localStorage.setItem('myReceita',JSON.stringify(this.data));
  }

  async getAllAguas() {
    this.aguService.getList().subscribe(response => {
      //console.log(response);
      this.aguaData = response;
    })
  }


  async getAllMaltes() {
    this.malService.getList().subscribe(response => {
      //console.log(response);
      this.malteData = response;
    })
  }


  async getAllLupulos() {
    this.lupService.getList().subscribe(response => {
      //console.log(response);
      this.lupuloData = response;
    })
  }


  async getAllLeveduras() {
    this.levService.getList().subscribe(response => {
      //console.log(response);
      this.leveduraData = response;
    })
  }


  ngOnInit() {
    this.getAllAguas();
    this.getAllMaltes();
    this.getAllLupulos();
    this.getAllLeveduras();

    this.itensForm = this.fb.group({
      aguas: this.fb.array([
        this.fb.group({
          id: ['', Validators.required],
          quantidade: [0, Validators.required],
          uso: ['', Validators.required]
        })
      ]),
      maltes: this.fb.array([
        this.fb.group({
          id: ['', Validators.required],
          quantidade: [0, Validators.required]
        })
      ]),
      lupulos: this.fb.array([
        this.fb.group({
          id: ['', Validators.required],
          quantidade: [0, Validators.required],
          uso: ['', Validators.required],
          tempo: [0, Validators.required],
          temperatura: [0, Validators.required],
          alfa: [0, Validators.required]
        })
      ]),
      leveduras: this.fb.array([
        this.fb.group({
          id: ['', Validators.required],
          quantidade: [0, Validators.required]
        })
      ])
    })
    
  }

  removeAgua(i) {
    let aguaArray = this.itensForm.controls.aguas as FormArray;
    aguaArray.removeAt(i);
  }

  addAgua() {
    let aguaArray = this.itensForm.controls.aguas as FormArray;
    let arraylen = aguaArray.length;

    let newAguagroup: FormGroup = this.fb.group({
      id: ['', Validators.required],
      quantidade: [0, Validators.required],
      uso: ['', Validators.required]
    })

    aguaArray.insert(arraylen, newAguagroup);
  }

  removeMalte(i) {
    let malteArray = this.itensForm.controls.maltes as FormArray;
    malteArray.removeAt(i);
  }

  addMalte() {
    let malteArray = this.itensForm.controls.maltes as FormArray;
    let arraylen = malteArray.length;

    let newMaltegroup: FormGroup = this.fb.group({
      id: ['', Validators.required],
      quantidade: [0, Validators.required]
    })

    malteArray.insert(arraylen, newMaltegroup);
  }

  removeLupulo(i) {
    let lupuloArray = this.itensForm.controls.lupulos as FormArray;
    lupuloArray.removeAt(i);
  }

  addLupulo() {
    let lupuloArray = this.itensForm.controls.lupulos as FormArray;
    let arraylen = lupuloArray.length;

    let newLupulogroup: FormGroup = this.fb.group({
      id: ['', Validators.required],
      quantidade: [0, Validators.required],
      uso: ['', Validators.required],
      tempo: [0, Validators.required],
      temperatura: [0, Validators.required],
      alfa: [0, Validators.required]
    })

    lupuloArray.insert(arraylen, newLupulogroup);
  }

  removeLevedura(i) {
    let leveduraArray = this.itensForm.controls.leveduras as FormArray;
    leveduraArray.removeAt(i);
  }

  addLevedura() {
    let leveduraArray = this.itensForm.controls.leveduras as FormArray;
    let arraylen = leveduraArray.length;

    let newLeveduragroup: FormGroup = this.fb.group({
      id: ['', Validators.required],
      quantidade: [0, Validators.required]
    })

    leveduraArray.insert(arraylen, newLeveduragroup);
  }

  /*ver() {
    console.log(this.itensForm.controls.aguas.value);
    console.log(this.itensForm.controls.maltes.value);
    console.log(this.itensForm.controls.lupulos.value);
    console.log(this.itensForm.controls.leveduras.value);
  }
*/

  async submitForm() {

    this.data.aguas = this.itensForm.controls.aguas.value;
    this.data.maltes = this.itensForm.controls.maltes.value;
    this.data.lupulos = this.itensForm.controls.lupulos.value;
    this.data.leveduras = this.itensForm.controls.leveduras.value;

    console.log(this.data);

    this.recService.createItem(this.data).subscribe((response) => {
      this.presentToast();
      this.router.navigate(['receitas-list']);
    });
 
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Receita cadastrada com sucesso!',
      duration: 3000
    });
    toast.present();
  }

}
