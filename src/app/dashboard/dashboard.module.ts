import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material support
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Our module for DEMO time
import { CxMatLayoutModule } from '@cyazyx/cx-mat-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ConsoleComponent } from './console/console.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ConsoleComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CxMatLayoutModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
