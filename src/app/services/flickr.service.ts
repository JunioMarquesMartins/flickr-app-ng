import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()

export class FlickrService {
    
    constructor(private http:HttpClient){}
    
    getUrlString( urlString:string ){

        const url = `https://api.flickr.com/services/rest/${ urlString }`;
        return this.http.get(url);

    }

    getPhotos(query, page){

        return this.getUrlString(`?method=flickr.photos.search&page=${page}&api_key=d32790976c1a1204b3225a65ddc79947&user_id=21892180@N04&text=${query}&format=json&nojsoncallback=1`)
              .pipe( map( data =>  data['photos'].photo ));
        
    }

    getInfoPhotos(id){

        return this.getUrlString(`?method=flickr.photos.getInfo&api_key=d32790976c1a1204b3225a65ddc79947&photo_id=${id}&format=json&nojsoncallback=1`)
            .pipe( map( data => data['photo']));
    }

}