import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';
import { LocationsComponent } from './locations/locations.component';


@NgModule({
  declarations: [BranchesComponent, LocationsComponent],
  imports: [
    CommonModule,
    BranchesRoutingModule
  ]
})
export class BranchesModule { }
