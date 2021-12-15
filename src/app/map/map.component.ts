import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import { MarkerService } from '../_services/marker.service';
import { PlatesService } from '../_services/plates.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map;
  private plates;

  constructor(private markerService: MarkerService,
    private shapeService: PlatesService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.shapeService.getPlatesShapes().subscribe(plates => {
      this.plates = plates;
      this.initPlatesLayer();
    });
    this.markerService.makeEarthquakeCircleMarkers(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [8, 0],
      zoom: 2.25,
      zoomSnap: 0.25
    });

    const tiles = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
      maxZoom: 19,
      opacity: 0.5,
      attribution: '© Map tiles by Stamen Design, under CC BY 3.0. Data by <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, under ODbL. Earthquake data from <a href=https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php>USGS</a>',
    });

    tiles.addTo(this.map);
  }

  private initPlatesLayer() {
    const platesLayer = L.geoJSON(this.plates, {
      style: (feature) => ({
        weight: 2,
        opacity: 0.5,
        color: '#41b6c4',
        fillOpacity: 0,
      }),
      onEachFeature: (feature, layer) => (
        layer.on({
          mouseover: (e) => (this.highlightFeature(e)),
          mouseout: (e) => (this.resetFeature(e)),
        }),
        layer.bindTooltip(feature.properties.PlateName, 
            {
                sticky: true,
                className: 'tooltip-content'
            }
        )
      )
    });

    this.map.addLayer(platesLayer);
    platesLayer.bringToBack()
  }

  private highlightFeature(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 4,
      opacity: 1.0,
      color: '#41b6c4',
      fillOpacity: 0.2,
    });
  }

  private resetFeature(e)  {
    const layer = e.target;
    layer.setStyle({
      weight: 2,
      opacity: 0.5,
      color: '#41b6c4',
      fillOpacity: 0,
    });
  }

}