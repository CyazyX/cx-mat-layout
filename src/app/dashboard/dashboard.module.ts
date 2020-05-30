import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Our module for DEMO time
import { CxMatLayoutModule } from '@cyazyx/cx-mat-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ConsoleComponent } from './console/console.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ConsoleComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CxMatLayoutModule
  ]
})
export class DashboardModule { }
