export interface MockLayers {
}

import { Layer } from './layer';

export const LAYERS: Layer[] = [
  { 
    id: 11, 
    name: 'Significant Earthquakes',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson' 
  },
  { 
    id: 12, 
    name: 'M4.5+ Earthquakes',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson' 
  },
  { 
    id: 13, 
    name: 'M2.5+ Earthquakes',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson' 
  },
  { 
    id: 14, 
    name: 'M1.0+ Earthquakes',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson' 
  },
  { 
    id: 15, 
    name: 'All Earthquakes',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonn' 
  }
];
