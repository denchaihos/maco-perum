import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapRoutingModule } from './map-routing.module';
import {GooglemapComponent} from './googlemap/googlemap.component';



@NgModule({
  declarations: [GooglemapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,GoogleMapsModule,
  ]
})
export class MapModule { }
