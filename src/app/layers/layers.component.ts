import { Component, OnInit } from '@angular/core';
import { Layer } from '../layer';
import { LAYERS } from '../mock-layers';

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss']
})
export class LayersComponent implements OnInit {
  layers = LAYERS
  selectedLayer: Layer;

  constructor() { }

  ngOnInit(): void {
    this.selectedLayer = LAYERS[4]
  }

  getSelectedLayer(layer: Layer): void {
    this.selectedLayer = layer;
  }

}
