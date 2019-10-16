import { CervejaService } from './../../../services/cerveja.service';
import { Cerveja } from './../../../models/cerveja';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-cerveja-details',
  templateUrl: './tipo-cerveja-details.page.html',
  styleUrls: ['./tipo-cerveja-details.page.scss'],
})
export class TipoCervejaDetailsPage implements OnInit {

  id: number;
  data: Cerveja;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public cevaService: CervejaService
  ) { 
    this.data = new Cerveja();

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.cevaService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

}
