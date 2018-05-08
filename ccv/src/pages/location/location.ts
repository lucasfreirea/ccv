import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,
    CameraPosition,
    MarkerOptions,
    Marker,
    MyLocation
} from '@ionic-native/google-maps';

@Component({
    selector: 'page-location',
    templateUrl: 'location.html'
})
export class LocationPage {
    @ViewChild('map') mapRef: ElementRef;

    map: GoogleMap;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        this.loadMap();
    }
    loadMap() {

        let mapOptions: GoogleMapOptions = {
            camera: {
                target: {
                    lat: -3.7321572,
                    lng: -38.5221987
                },
                zoom: 17.61,
                tilt: 30
            }
        };

        this.map = GoogleMaps.create(this.mapRef.nativeElement, mapOptions);

        // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
            .then(() => {
                console.log('Map is ready!');

                // Now you can use all methods safely.
                this.map.addMarker({
                    title: 'Videira Centro',
                    icon: 'blue',
                    animation: 'DROP',
                    position: {
                        lat: -3.7321572,
                        lng: -38.5221987
                    }
                })
            });
    }

}
