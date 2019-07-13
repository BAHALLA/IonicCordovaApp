import { Component, OnInit } from '@angular/core';
import {PlaceModel} from '../models/place.model';
import {LocationService} from '../services/location.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  locations: Array<PlaceModel> = [];
  constructor(private locationService: LocationService, private router: Router,
              private alertController: AlertController ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
   this.onGetLocations();
  }



  onNewLocation() {
      this.router.navigateByUrl("/menu/new-location");
  }

    async onRemove(l: PlaceModel) {
        const alert = await this.alertController.create({
            header: 'Confirmation',
            message: 'delete this location !',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        this.removeLocation(l);
                        console.log('Confirm Okay');
                    }
                }
            ]
        });
        await alert.present();
    }

    private onGetLocations() {
        this.locationService.getLocations().then( data => {
            this.locations =data;
        });
    }

    private removeLocation(l: PlaceModel) {
        let i = this.locations.indexOf(l);
        this.locations.splice(i,1);
        this.locationService.updateLocations(this.locations);
    }
}
