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
          title: 'Lupulo',
          url: '/cadastrar-lupulo',
          icon: "ios-rose"
        },
        {
          title: 'Malte',
          url: '/cadastrar-malte',
          icon: "md-keypad"
        },
        {
          title: 'Levedura',
          url: '/cadastrar-levedura',
          icon: "md-color-filter"
        },
        {
          title: 'Água',
          url: '/cadastrar-agua',
          icon: "ios-water"
        },
        {
          title: 'Receitas',
          url: '/cadastrar-receitas',
          icon: "ios-flask"
        },
        {
          title: 'Tipos de Cerveja',
          url: '/cadastrar-tipo-cerveja',
          icon: "ios-beer"
        },
        {
          title: 'Listar Tipos de Cerveja',
          url: '/tipo-cerveja-list',
          icon: "ios-book"
        },
        {
          title: 'Visualizar Receitas',
          url: '/receitas-details',
          icon: "ios-book"
        }
      ];
  }
}
