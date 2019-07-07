import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 readonly url= 'http://api.openweathermap.org/data/2.5/forecast?q=';
 readonly key= '&APPID=f9cd187610e39de0053256084419bfec';
  constructor(private httpClient: HttpClient) { }


  getWheather(city: string) {
      return this.httpClient.get(this.url + city + this.key);
  }
}

