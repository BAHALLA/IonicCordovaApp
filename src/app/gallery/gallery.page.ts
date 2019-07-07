import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  keyword: string;
  currentPage: number=1;
  size: number=10;
  private dataImages=[];
  private totalPages: number;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
  }

  onLoadImages() {
      this.galleryService.loadImages(this.keyword, this.size, this.currentPage)
          .subscribe( data => {
           data['hits'].forEach(image => {
             this.dataImages.push(image);
           });
           this.totalPages = data['totalHits'] / this.size;
          }, error => {
            console.log(error);
          });
  }

  loadData(evnt) {

    if(this.currentPage < this.totalPages) {

      console.log(this.currentPage +'/'+this.totalPages);
      ++this.currentPage;
      this.onLoadImages();
      evnt.target.complete();
    }
    if(this.currentPage >= this.totalPages) {
      evnt.target.disabled= true;
    }
  }
}
