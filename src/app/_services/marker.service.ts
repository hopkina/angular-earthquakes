import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

import { PopUpService } from './pop-up.service';
import { LayersComponent } from '../layers/layers.component';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
    
  // earthquake dataset sourced from
  // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  earthquake_url: string = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

  static ScaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  constructor(
    private http: HttpClient, 
    private popupService: PopUpService
  ) {}

  makeEarthquakeMarkers(map: L.Map): void {
    this.http.get(this.earthquake_url).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);
      }
    });
  }

  makeEarthquakeCircleMarkers(map: L.Map): void {
    this.http.get(this.earthquake_url).subscribe((res: any) => {

      // Find the largest magnitude to scale the radii by.
      const maxVal = Math.max(...res.features.map(x => x.properties.mag), 0);

      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.ScaledRadius(c.properties.mag, maxVal),
          color: '#f03b20',
        })

        circle.bindPopup(this.popupService.makeEarthquakePopup(c));

        circle.addTo(map);
      }
    });
  }

}