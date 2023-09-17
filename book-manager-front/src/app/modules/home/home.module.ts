import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [ListComponent, ManageComponent],
  imports: [SharedModule, HomeRoutingModule , NgxPaginationModule],
})
export class HomeModule {}
