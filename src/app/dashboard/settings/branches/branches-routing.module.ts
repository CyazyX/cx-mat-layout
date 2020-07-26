import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BranchesComponent } from './branches.component';
import { LocationsComponent } from './locations/locations.component';
import { AddEditLocationComponent } from './locations/add-edit-location/add-edit-location.component';

const routes: Routes = [
  { path: '', component: BranchesComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'locations/:id', component: AddEditLocationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
