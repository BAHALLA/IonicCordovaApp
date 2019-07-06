import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contact = {
    name: 'BAHALLA Taoufiq',
    email: 'bahalla.taoufiq@gmail.com',
    tel: '0610799605',
    logo: 'assets/images/logoEnset.png',
    location: 'assets/images/nature.png'
  };
  constructor() {}

}
