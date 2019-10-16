import { AguaService } from './../../../services/agua.service';
import { Agua } from './../../../models/agua';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agua-details',
  templateUrl: './agua-details.page.html',
  styleUrls: ['./agua-details.page.scss'],
})
export class AguaDetailsPage implements OnInit {

  id: number;
  data: Agua;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public aguService: AguaService
  ) {
    this.data = new Agua();

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.aguService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

}
