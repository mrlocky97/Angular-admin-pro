import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
   
  private chooseTheme = document.querySelector('#theme'); // este elemento esta en index

  constructor() {
    // url puede ser null, en ese caso se le asigna un string por defecto
    const url: string = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.chooseTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    // reemplazamos el atributo href
    this.chooseTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.currentTheme();
  }

  currentTheme(): void {
    const links = document.querySelectorAll('.selector');
    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const urlTheme = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.chooseTheme?.getAttribute('href');
      if (currentTheme === urlTheme) {
        element.classList.add('working');
      }
    })
  }
}
