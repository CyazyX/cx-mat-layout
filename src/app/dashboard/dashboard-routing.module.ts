import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ConsoleComponent } from './console/console.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'console', pathMatch: 'full' },
      { path: 'console', component: ConsoleComponent },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
