import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from "./components/spinner/spinner.component";

import { InfiniteScrollModule } from '../../node_modules/angular2-infinite-scroll';

// Importar Rutas
import { ROUTES } from './app.routes';

// Services
import { FlickrService } from "./services/flickr.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [
    FlickrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
