import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  constructor(private http: HttpClient) { }

  getPlatesShapes(): Observable<any> {
    // plates sourced from https://github.com/fraxen/tectonicplates
    return this.http.get('./assets/data/PB2002_plates.json');
  }
}