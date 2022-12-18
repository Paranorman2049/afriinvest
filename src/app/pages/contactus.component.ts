import  { Component, OnInit } from '@angular/core'

declare let HSCore: any;
declare let L: any;

@Component({
    templateUrl: './contactus.component.html'
})
export class ContactUsComponent implements OnInit { 

    ngOnInit(): void {
        // INITIALIZATION OF LEAFLET
        // =======================================================
        const leaflet = HSCore.components.HSLeaflet.init(document.getElementById('mapEg3'))

        L.tileLayer(
            'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', 
            {
                id: 'mapbox/light-v9'
            }
        ).addTo(leaflet)
    }
 }