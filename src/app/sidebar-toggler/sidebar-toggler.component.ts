import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../_services/side-bar.service';

@Component({
  selector: 'sidebar-toggler',
  templateUrl: './sidebar-toggler.component.html',
  styleUrls: ['./sidebar-toggler.component.scss']
})
export class SidebarTogglerComponent implements OnInit {

  constructor(public sideBarService: SideBarService) { }

  ngOnInit() {
  }

}
