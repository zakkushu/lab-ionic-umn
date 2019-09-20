import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PleacesRoutingModule } from './places-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PleacesRoutingModule
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
