import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MapsRoutingModule } from './maps-routing.module';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiamFjb2J2ZWdhIiwiYSI6ImNsc3NieHpyYTBkazQyamxvZjY5MGdxeGQifQ.MkOFifLlJLTEg5aWg2zqAQ';


@NgModule({
  declarations: [
    FullScreenPageComponent,
    MapsLayoutComponent,
    MarkersPageComponent,
    MiniMapComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule, 
    CounterAloneComponent,
    MapsRoutingModule, 
    SideMenuComponent,
  ]
})
export class MapsModule { }
