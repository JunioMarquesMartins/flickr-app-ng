import { Component } from '@angular/core';
import { FlickrService } from "../../services/flickr.service";
import { ActivatedRoute } from "@angular/router";

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{

  getData: any;
  photoInfo: any;
  loading: boolean;

  constructor(private router: ActivatedRoute, private flickr: FlickrService) {

    this.loading=true;
    this.flickr.getPhotos('sunset')
      .subscribe(data=>{
        this.loading = false;
        this.getData = data;
        console.log(data);
      })
  }

  showPhotoInfo(id){
    this.loading=true;
    this.flickr.getInfoPhotos(id)
    .subscribe(info=>{
      this.photoInfo = info;
      this.loading = false;
    })
  }

  search(tag:string){
    this.loading=true;
    this.flickr.getPhotos(tag)
    .subscribe(data=>{
      this.getData = data;
      this.loading=false;
    })
  }

  closePopup(){
    this.photoInfo = false;
  }
  
  notEventPropagation(event){
    console.log(event);
    event.stopPropagation();
  }

}