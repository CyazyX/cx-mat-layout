import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

// Material Modules
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Directives

// Components
import { CxMatLayoutComponent } from './components/cx-mat-layout.component';
import { CxMatMenuComponent } from './components/cx-mat-menu/cx-mat-menu.component';
import { CxMatMenuItemComponent } from './components/cx-mat-menu-item/cx-mat-menu-item.component';
import { CxMatMenuTopComponent } from './components/cx-mat-menu-top/cx-mat-menu-top.component';



@NgModule({
  declarations: [
    CxMatLayoutComponent,
    CxMatMenuComponent,
    CxMatMenuItemComponent,
    CxMatMenuTopComponent,
  ],
  imports: [
    CommonModule,
    // Material modules
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    CxMatLayoutComponent,
    CxMatMenuComponent,
    CxMatMenuItemComponent,
    CxMatMenuTopComponent,
  ]
})
export class CxMatLayoutModule { }
