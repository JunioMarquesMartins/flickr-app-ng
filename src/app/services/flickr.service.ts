import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()

export class FlickrService {

    flickrApiUrl: {};


    constructor(private http:HttpClient){
        console.log('Flickr Service');
    }

    getPhotos(query){
        
        if(!query){
            query === "sunset";
        }

        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d32790976c1a1204b3225a65ddc79947&user_id=21892180@N04&text=${query}&format=json&nojsoncallback=1`;
        //const url = 'https://api.flickr.com/services/rest/?method=flickr.places.find&api_key=d32790976c1a1204b3225a65ddc79947&user_id=21892180@N04&query=brazil&format=json&nojsoncallback=1';

        //const url = 'https://api.flickr.com/services/feeds/photos_public.gne';
        //const url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=sunset&tagmode=any&format=json';


        return this.http.get(url)
              .pipe( map( data =>  data['photos'].photo ));
        

    }

    getInfoPhotos(id){
        const url=`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=d32790976c1a1204b3225a65ddc79947&photo_id=${id}&format=json&nojsoncallback=1`;
        return this.http.get(url)
            .pipe( map( data => data['photo']));
    }

}