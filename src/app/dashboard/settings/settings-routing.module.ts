import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparisonComponent } from './comparison/comparison.component';


const routes: Routes = [
  {path: 'comparisons', component: ComparisonComponent},
  { path: 'branches', loadChildren: () => import('./branches/branches.module').then(m => m.BranchesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
