import { Component, OnInit } from '@angular/core';
import {PlaceModel} from '../models/place.model';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {LocationService} from '../services/location.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  constructor(private geolcation: Geolocation, private locationService: LocationService
  , private navController: NavController) { }

  ngOnInit() {
  }

    onSaveLocation(data: PlaceModel) {
      data.timestamp = new Date().getTime();
      data.photos = [];
      this.geolcation.getCurrentPosition().then(resp => {
          data.coordinates = {
              latitude : resp.coords.latitude,
              longitude: resp.coords.longitude
          };
          this.locationService.addLocation(data);
          this.navController.back();
      });
     // console.log(data);
    }
}
