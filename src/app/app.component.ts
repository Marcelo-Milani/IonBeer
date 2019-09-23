import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =
      [
        {
          title: 'Inicio',
          url: '/home',
          icon: "home"
        },
        {
          title: 'Cadastar Lupulo',
          url: '/cadastrar-lupulo',
          icon: "add-circle"
        },
        {
          title: 'Cadastrar Malte',
          url: '/cadastrar-malte',
          icon: "add-circle"
        },
        {
          title: 'Cadastrar Levedura',
          url: '/cadastrar-levedura',
          icon: "add-circle"
        },
        {
          title: 'Cadastrar Água',
          url: '/cadastrar-agua',
          icon: "add-circle"
        },
        {
          title: 'Cadastrar Receitas',
          url: '/cadastrar-receitas',
          icon: "add-circle"
        },
        {
          title: 'Cadastrar Tipos de Cerveja',
          url: '/cadastrar-tipo-cerveja',
          icon: "add-circle"
        },
        {
          title: 'Listar Tipos de Cerveja',
          url: '/tipo-cerveja-details',
          icon: "book"
        },
        {
          title: 'Visualizar Receitas',
          url: '/receitas-details',
          icon: "book"
        }
      ];
  }
}
