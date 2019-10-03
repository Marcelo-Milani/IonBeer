import { MalteService } from './../../../services/malte.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Malte } from './../../../models/malte';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-malte-details',
  templateUrl: './malte-details.page.html',
  styleUrls: ['./malte-details.page.scss'],
})
export class MalteDetailsPage implements OnInit {

  id: number;
  data: Malte;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public maltService: MalteService
  ) { 
    this.data = new Malte();

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.maltService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 

}
