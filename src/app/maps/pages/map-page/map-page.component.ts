import { PlacesService } from './../../services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent {

  constructor ( private placesService:PlacesService ){}

  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }

}
