import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';
import { MapService } from './../../services/map.service';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!:ElementRef;

  constructor ( 
    private placesService:PlacesService, 
    private mapService:MapService 
  ){}

  ngAfterViewInit(): void {

    if ( !this.placesService.useLocation ) throw Error('No hay placesService.userLocation'); 

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.useLocation,
      zoom: 14
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>  
      `);
    
    new Marker({ color: 'red' })
        .setLngLat( this.placesService.useLocation )
        .setPopup( popup )
        .addTo( map );
    
    this.mapService.setMap( map );

  }


}
