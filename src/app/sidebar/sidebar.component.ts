import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../_services/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public sideBarService: SideBarService) { }

  ngOnInit(): void {
  }

}
