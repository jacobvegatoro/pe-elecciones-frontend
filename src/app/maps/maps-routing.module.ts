import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MapsLayoutComponent } from "./layout/maps-layout/maps-layout.component";
import { FullScreenPageComponent } from "./pages/full-screen-page/full-screen-page.component";
import { ZoomRangePageComponent } from "./pages/zoom-range-page/zoom-range-page.component";
import { MarkersPageComponent } from "./pages/markers-page/markers-page.component";
import { PropertiesPageComponent } from "./pages/properties-page/properties-page.component";
<<<<<<< HEAD
import { MapScreenComponent } from "./pages/map-screen/map-screen.component";
=======
import { MapPageComponent } from "./pages/map-page/map-page.component";
>>>>>>> a4d065769d81e27212f4c21581cad657f05918de

const routes:Routes = [
    {
        path: '',
        component: MapsLayoutComponent,
        children: [
            { path: 'fullscreen', component: FullScreenPageComponent },
            { path: 'zoom-range', component: ZoomRangePageComponent },
            { path: 'markers', component: MarkersPageComponent },
            { path: 'properties', component: PropertiesPageComponent },
<<<<<<< HEAD
            { path: 'screen', component: MapScreenComponent },
=======
            { path: 'map', component: MapPageComponent },
>>>>>>> a4d065769d81e27212f4c21581cad657f05918de
            { path: '**', redirectTo: 'fullscreen' },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapsRoutingModule { }