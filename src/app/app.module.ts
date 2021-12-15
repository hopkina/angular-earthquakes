import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { MarkerService } from './_services/marker.service';
import { PopUpService } from './_services/pop-up.service';
import { PlatesService } from './_services/plates.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarTogglerComponent } from './sidebar-toggler/sidebar-toggler.component';
import { LayersComponent } from './layers/layers.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarTogglerComponent,
    LayersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MarkerService,
    PopUpService,
    PlatesService,
    LayersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}