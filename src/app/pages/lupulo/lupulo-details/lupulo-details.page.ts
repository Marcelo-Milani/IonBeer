import { LupuloService } from './../../../services/lupulo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lupulo } from './../../../models/lupulo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lupulo-details',
  templateUrl: './lupulo-details.page.html',
  styleUrls: ['./lupulo-details.page.scss'],
})
export class LupuloDetailsPage implements OnInit {
 
  id: number;
  data: Lupulo;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public lupService: LupuloService
  ) { 
    this.data = new Lupulo();

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.lupService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 

}
