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
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
    selector: 'page-location',
    templateUrl: 'location.html'
})
export class LocationPage {
    @ViewChild('map') mapRef: ElementRef;

    map: GoogleMap;

    constructor(public navCtrl: NavController, private launchNavigator: LaunchNavigator, private geolocation: Geolocation) {
    }

    IrVideiraSul() {
        this.geolocation.getCurrentPosition().then((resp) => {
            var app = this.launchNavigator.APP.USER_SELECT;
            this.launchNavigator.navigate([-3.80210705, -38.4768581], {
                start: [resp.coords.latitude, resp.coords.longitude],
                app: app
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    IrVideiraCentro() {
        this.geolocation.getCurrentPosition().then((resp) => {
            var app = this.launchNavigator.APP.USER_SELECT;
            this.launchNavigator.navigate([-3.7321572, -38.5221987], {
                start: [resp.coords.latitude, resp.coords.longitude],
                app: app
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    IrVideiraNatal() {
        this.geolocation.getCurrentPosition().then((resp) => {
            var app = this.launchNavigator.APP.USER_SELECT;
            this.launchNavigator.navigate([-5.77237326, -35.26114937], {
                start: [resp.coords.latitude, resp.coords.longitude],
                app: app
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

}
