import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  city: string;
  dataMeteo: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onLeadMeteo() {
      this.weatherService.getWheather(this.city).subscribe(data => {
            this.dataMeteo = data;
      }, error => {
            console.log(error)
      });
  }
}
