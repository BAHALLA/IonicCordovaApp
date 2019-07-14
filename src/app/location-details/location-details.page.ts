import { Component, OnInit } from '@angular/core';
import {LocationService} from '../services/location.service';
import {PlaceModel} from '../models/place.model';
import {Camera} from '@ionic-native/camera/ngx';
import {CameraOptions} from '@ionic-native/camera/ngx';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  currentLocation: PlaceModel;
  constructor(private locationService: LocationService,
              private camera: Camera, private alertController: AlertController) { }

  ngOnInit() {
    this.currentLocation = this.locationService.currentLocation;
  }

    async onTakePicture() {
      const options1: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        allowEdit: true
      };

      const options2: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true
      };

      const alert = await this.alertController.create({
          header: 'photos',
          message: 'Take or choose picture',
         buttons: [
           {
             text: 'Camera',
             handler: () => {
                this.getPicture(options1);
             }
           },
           {
             text: 'Gallery',
             handler: ()=> {
                 this.getPicture(options2);
             }
           }
         ]
      });
      await alert.present();

    }

  private getPicture(options: CameraOptions) {
    this.camera.getPicture(options).then(imageData => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.locationService.addPhotoLocation(base64Image, this.currentLocation.timestamp);
    });
  }
}
