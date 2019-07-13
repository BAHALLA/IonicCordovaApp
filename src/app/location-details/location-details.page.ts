import { Component, OnInit } from '@angular/core';
import {LocationService} from '../services/location.service';
import {PlaceModel} from '../models/place.model';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  currentLocation: PlaceModel;
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.currentLocation = this.locationService.currentLocation;
  }

}
