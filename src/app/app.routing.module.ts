import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WarehouseSectorComponent} from './warehouse-sector/warehouse-sector.component';
import {WarehouseSectorDetailsComponent} from './warehouse-sector/warehouse-sector-details/warehouse-sector-details.component';
import {AddWarehouseSectorComponent} from './warehouse-sector/add-warehouse-sector/add-warehouse-sector.component';
import {ProductComponent} from './product/product.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {DeliveryDetailsComponent} from './delivery/delivery-details/delivery-details.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HeaderComponent} from './header/header.component';
import {AddDeliveryComponent} from './delivery/add-delivery/add-delivery.component';
import {ClientComponent} from './client/client.component';
import {AddClientComponent} from './client/add-client/add-client.component';

const routes: Routes = [
  {path: 'warehouseSectors', component: WarehouseSectorComponent},
  {path: 'warehouseSectors/add', component: AddWarehouseSectorComponent},
  {path: 'warehouseSectors/details/:id', component: WarehouseSectorDetailsComponent},
  {path: 'products', component: ProductComponent},
  {path: 'deliveries', component: DeliveryComponent},
  {path: 'deliveries/add', component: AddDeliveryComponent},
  {path: 'deliveries/details/:id/:status', component: DeliveryDetailsComponent},
  {path: 'clients', component: ClientComponent},
  {path: 'clients/add', component: AddClientComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', component: HeaderComponent}
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
export class AppRoutingModule {
}
