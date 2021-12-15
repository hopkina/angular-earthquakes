import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeEarthquakePopup(data: any): string {
    return `
      <div class="col popup-content">
        <div class="row">
          <div class="col-sm-3">
            <div>Location: </div>
          </div>
          <div class="col">
            ${ data.properties.place }
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div>Magnitude: </div>
          </div>
          <div class="col">
            ${ data.properties.mag }
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div>Time: </div>
          </div>
          <div class="col">
            ${new Date(data.properties.time)}
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            &nbsp
          </div>
          <div class="col">
            <a href=${ data.properties.url } target="_blank">
            More information...
            </a>
          </div>
        </div>
      </div>`
  }

}
