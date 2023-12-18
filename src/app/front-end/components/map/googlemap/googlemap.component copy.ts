import {
    Component,
    OnInit,
    NgZone,
    ViewChild,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'app-googlemap',
    templateUrl: './googlemap.component.html',
    styleUrls: ['./googlemap.component.css'],
})
export class GooglemapComponent implements OnInit {
    map: google.maps.Map;
    currentPositionMarker: any;
    display: any;
    center: google.maps.LatLngLiteral ;
    mapOptions: google.maps.MapOptions = {
        // center: { lat: 38.9987208, lng: -77.2538699 },
        zoom: 14,
    };
    zoom = 14;
    constructor() {}

    ngOnInit() {
        this.initMap();
    }

    initMap() {
        const mapOptions: google.maps.MapOptions = {
            center: { lat: 0, lng: 0 }, // Center the map at (0, 0)
            zoom: 10, // Zoom level
        };

        // this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

        // Get the user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    // Create a marker for the current location
                    this.currentPositionMarker = {
                        position: currentLocation,
                        map: this.map,
                        title: 'Your Location',
                    };
                    this.mapOptions = {
                       // center: { lat: currentLocation.lat, lng: currentLocation.lng }, // Center the map at (0, 0)
                        zoom: 14, // Zoom level
                    };
                    this.center={
                      lat: currentLocation.lat, lng: currentLocation.lng
                    }

                    // Center the map on the user's current location
                    this.map.setCenter(currentLocation);
                },
                (error) => {
                    console.error('Error getting current location:', error);
                }
            );
        }
    }

    marker = {
        position: { lat: 38.9987208, lng: -77.2538699 },
    };

    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null)
            this.mapOptions.center = event.latLng.toJSON();
    }

    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
}
