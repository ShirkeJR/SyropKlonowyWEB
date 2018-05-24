import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WarehouseSectorComponent } from './warehouse-sector/warehouse-sector.component';
import { WarehouseSectorDetailsComponent } from './warehouse-sector/warehouse-sector-details/warehouse-sector-details.component';
import { AddWarehouseSectorComponent } from './warehouse-sector/add-warehouse-sector/add-warehouse-sector.component';

const routes: Routes = [
  { path: 'warehouseSectors', component: WarehouseSectorComponent },
  { path: 'warehouseSectors/add', component: AddWarehouseSectorComponent },
  { path: 'warehouseSectors/details/:id', component: WarehouseSectorDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
