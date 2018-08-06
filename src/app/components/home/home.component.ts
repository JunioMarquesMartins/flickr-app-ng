import { Component } from '@angular/core';
import { FlickrService } from "../../services/flickr.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  getData: any[] = [];
  photoInfo: any;
  querySearch: string;
  loading: boolean;


  // Scroll
  modalScrollDistance = 2;
  modalScrollThrottle = 50;
  page=1;

  constructor(private router: ActivatedRoute, private flickr: FlickrService) {

    this.initPhotos(this.page);
  }

  initPhotos(page){
    this.loading=true;
    this.flickr.getPhotos('', page)
      .subscribe(data=>{
        this.getData = data;
        this.loading = false;
      })
  }

  onScrollDown () {
    this.loading=true;
    console.log('scrolled!!');
    this.page ++;
    this.initPhotos(this.page);
  }

  showPhotoInfo(id){
    this.loading=true;
    this.flickr.getInfoPhotos(id)
    .subscribe(info=>{
      this.photoInfo = info;
      this.loading = false;
    })
  }

  search(query:string){
    this.loading=true;
    this.querySearch = query;
    this.page = 1;
    this.flickr.getPhotos(query, this.page)
    .subscribe(data=>{
      this.getData = data;
      this.loading=false;
    })
  }

  closePopup(){ this.photoInfo = false; }
  stopEventPropagation(event){ event.stopPropagation(); }

  loadingIsShow(){
    if(this.loading===true){
      return true;
    }
    return false;
  }

  photosIsRender(){
    if(this.getData.length>0 && this.loading===false){
      return true;
    }
    return false;
  }

}