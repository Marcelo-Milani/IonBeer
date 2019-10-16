import { Component, OnInit } from '@angular/core';
import { ReceitaService } from './../../../services/receita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Receita } from './../../../models/receita';


@Component({
  selector: 'app-receitas-details',
  templateUrl: './receitas-details.page.html',
  styleUrls: ['./receitas-details.page.scss'],
})
export class ReceitasDetailsPage implements OnInit {

  id: number;
  data: Receita;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public recService: ReceitaService
  ) { 
    this.data = new Receita();

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.recService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 

}
