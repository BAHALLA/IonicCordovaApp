import { Injectable } from '@angular/core';
import {PlaceModel} from '../models/place.model';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: Array<PlaceModel> = [];

  constructor(private storage : Storage) {
  }

  public getLocations() {
     return this.storage.get("locations").then(data => {
         this.locations=data!=null?data:[];
         return this.locations.slice();
     });
  }

  public addLocation(place: PlaceModel) {
    this.locations.push(place);
    this.storage.set("locations", this.locations);
  }

  public updateLocations(locations) {
        this.storage.set("locations",locations);
    }
}
