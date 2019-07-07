import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpClient: HttpClient) { }

  loadImages(keyword: string, size:number, currentPage: number) {
    return this.httpClient.get('https://pixabay.com/api/?key=12973711-ffe9b5b5b7b1e175881f22eac&q='+
       keyword+'&per_page='+size+'&page='+currentPage);
  }
}
