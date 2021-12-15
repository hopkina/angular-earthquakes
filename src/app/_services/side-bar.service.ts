import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  hideSideBar: boolean = true;

  constructor() { }

  toggleSideBar(): void {
    this.hideSideBar = !this.hideSideBar;
  }

}
