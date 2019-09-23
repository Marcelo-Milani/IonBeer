import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath = '';
  pages = [
    {
      title: 'Cadastar Lupulo',
      url: '/cadastrar-lupulo'
    },
    {
      title: 'Cadastrar Malte',
      url: '/cadastrar-malte'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
        console.log(event.url);
      }
    });
  }

  ngOnInit() { }

}
