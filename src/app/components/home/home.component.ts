import { Component } from '@angular/core';
import { FlickrService } from "../../services/flickr.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{

  getData: any[] = [];
  photoInfo: any;
  querySearch: string;
  loading: boolean;

  constructor(private router: ActivatedRoute, private flickr: FlickrService) {

    this.loading=true;
    this.flickr.getPhotos('sunset')
      .subscribe(data=>{
        this.getData = data;
        this.loading = false;
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

  search(query:string){
    this.loading=true;
    this.querySearch = query;
    this.flickr.getPhotos(query)
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

  fhotosIsRender(){
    if(this.getData.length>0 && this.loading===false){
      return true;
    }
    return false;
  }

}