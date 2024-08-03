import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api';
import { MapService } from './map.service';
>>>>>>> a4d065769d81e27212f4c21581cad657f05918de

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];
<<<<<<< HEAD

  get isUserLocationReady():boolean{
    return !!this.useLocation
  }

  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation():Promise<[number, number]> {

    return new Promise ( ( resolve, reject) => {

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [ coords.longitude, coords.latitude ];
          resolve( this.useLocation );
        },
        ( err ) => {
          alert('No se pudo obtener la geolocalizacion');
=======
  public isLoadingPlaces:boolean = false;
  public places:Feature[] = [];

  get isUserLocationReady():boolean{
    return !!this.useLocation;
  }

  constructor( 
    private placesApi:PlacesApiClient,
    private mapService:MapService 
  ) { 
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]>{
    return new Promise( (resolve, reject) => {
      
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [ coords.longitude, coords.latitude ];
          resolve ( this.useLocation );
        },
        ( err ) => {
          alert('No se pudo obtener la geolocalización');
>>>>>>> a4d065769d81e27212f4c21581cad657f05918de
          console.log(err);
          reject();
        }
      );

    });
<<<<<<< HEAD

=======
  }

  getPlacesByQuery ( query:string = '' ) {

    if ( query.length === 0 ){
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if (!this.useLocation ) throw Error('No hay userLocation');

    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params:{
        proximity: this.useLocation.join(',')
      }
    })
      .subscribe( resp => {
        this.isLoadingPlaces = false;
        this.places = resp.features;

        this.mapService.createMarkersFromPlaces( this.places, this.useLocation! );
      });
  }

  deletePlaces(){
    this.places = [];
>>>>>>> a4d065769d81e27212f4c21581cad657f05918de
  }

}
