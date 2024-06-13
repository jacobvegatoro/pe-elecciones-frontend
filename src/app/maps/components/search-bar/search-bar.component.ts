import { PlacesService } from './../../services/places.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?:NodeJS.Timeout;

  constructor ( private placesService:PlacesService ) { }

  onQueryChanged( query:string = '' ){
    
    if ( this.debounceTimer ) clearTimeout ( this.debounceTimer );

    this.debounceTimer = setTimeout(() => {
      //console.log('Mandar este query:',query);
      this.placesService.getPlacesByQuery( query );
    }, 350);

  }

}
