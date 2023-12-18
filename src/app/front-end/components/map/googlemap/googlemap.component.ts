import {
    Component,
    OnInit,
    NgZone,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
    selector: 'app-googlemap',
    templateUrl: './googlemap.component.html',
    styleUrls: ['./googlemap.component.css'],
})
export class GooglemapComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

    map: google.maps.Map;
    currentPositionMarker: any = [];
    display: any;
    center: google.maps.LatLngLiteral;
    mapOptions: google.maps.MapOptions = {
        // center: { lat: 38.9987208, lng: -77.2538699 },
        zoom: 14,
    };
    zoom = 14;
    // markers: any;
    markers: google.maps.Marker[] = [];
    infoWindows: google.maps.InfoWindow[] = [];
    constructor() {}

    ngOnInit() {
        this.initMap();
    }

    initMap() {
        const otherLocations = [
            {
                position: { lat: 14.640002681974217, lng: 104.66777039209337 },
                title: 'dk1',
            },
            {
                position: { lat: 14.641095780527188, lng: 104.65890688159013 },
                title: 'WangChampu',
            },
            // Add more locations as needed
        ];
        // Create an InfoWindow for each marker

        // Get the user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    console.log(currentLocation);

                    // Create a marker for the current location
                    this.currentPositionMarker = [
                        {
                            position: currentLocation,
                            map: this.map,
                            title: 'Your Location',
                        },
                    ];
                    for (const location of otherLocations) {
                        console.log(location);
                        this.currentPositionMarker.push(location);
                    }
                    this.center = {
                        lat: currentLocation.lat,
                        lng: currentLocation.lng,
                    };
                },
                (error) => {
                    console.error('Error getting current location:', error);
                }
            );
        }
        // Create markers for other locations

        console.log(this.currentPositionMarker);
      
    }
    openInfoWindows(marker: google.maps.Marker, title: string) {
      console.log(marker);
        // Close any open info windows
        this.closeAllInfoWindows();

        // Find the corresponding info window and open it
        const index = this.markers.indexOf(marker);
        if (index !== -1) {
            this.infoWindows[index].open(this.map, marker);
        }
       

  
    }
    openInfoWindow(marker: MapMarker) {
      console.log(marker);
      if(this.infoWindow != undefined)
      this.infoWindow.open(marker);
    }
  

    closeAllInfoWindows() {
        for (const infoWindow of this.infoWindows) {
            infoWindow.close();
        }
    }

    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null)
            this.mapOptions.center = event.latLng.toJSON();
    }

    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
}
