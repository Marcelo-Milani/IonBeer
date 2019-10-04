import { LeveduraService } from './../../../services/levedura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Levedura } from './../../../models/levedura';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levedura-details',
  templateUrl: './levedura-details.page.html',
  styleUrls: ['./levedura-details.page.scss'],
})
export class LeveduraDetailsPage implements OnInit {

  id: number;
  data: Levedura;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public levService: LeveduraService
  ) { 
    this.data = new Levedura();

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.levService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

}
