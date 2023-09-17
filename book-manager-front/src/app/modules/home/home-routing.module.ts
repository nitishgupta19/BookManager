import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
  { path: '', component: ListComponent, pathMatch: 'full' },
  {
    path: 'create',
    component: ManageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: ManageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
