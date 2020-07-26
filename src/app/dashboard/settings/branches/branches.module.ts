import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';
import { LocationsComponent } from './locations/locations.component';
import { AddEditLocationComponent } from './locations/add-edit-location/add-edit-location.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [BranchesComponent, LocationsComponent, AddEditLocationComponent],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    // Material Modules
    MatIconModule,
    MatButtonModule
  ]
})
export class BranchesModule { }
