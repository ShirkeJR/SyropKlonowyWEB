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
import {AddDeliveryComponent} from './delivery/add-delivery/add-delivery.component';
import {ClientComponent} from './client/client.component';
import {AddClientComponent} from './client/add-client/add-client.component';
import {HistoryDeliveryComponent} from './delivery/history-delivery/history-delivery.component';
import {HistoryDeliveryDetailsComponent} from './delivery/history-delivery/history-delivery-details/history-delivery-details.component';
import {HistorySaleOrderComponent} from './sale-order/history-sale-order/history-sale-order.component';
import {SaleOrderComponent} from './sale-order/sale-order.component';
import {HistorySaleOrderDetailsComponent} from './sale-order/history-sale-order/history-sale-order-details/history-sale-order-details.component';
import {AddSaleOrderComponent} from './sale-order/sale-order-creator/add-sale-order/add-sale-order.component';
import {SaleOrderCreatorComponent} from './sale-order/sale-order-creator/sale-order-creator.component';
import {ClientDetailsComponent} from './client/client-details/client-details.component';
import {HomeComponent} from './home/home.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {RaportComponent} from './raport/raport.component';

const routes: Routes = [
  {path: 'warehouseSectors', component: WarehouseSectorComponent},
  {path: 'warehouseSectors/add', component: AddWarehouseSectorComponent},
  {path: 'warehouseSectors/details/:id/:name', component: WarehouseSectorDetailsComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/details/:id', component: ProductDetailsComponent},
  {path: 'deliveries', component: DeliveryComponent},
  {path: 'deliveries/add', component: AddDeliveryComponent},
  {path: 'deliveries/history', component: HistoryDeliveryComponent},
  {path: 'deliveries/history/details/:id', component: HistoryDeliveryDetailsComponent},
  {path: 'deliveries/details/:id/:status', component: DeliveryDetailsComponent},
  {path: 'saleOrders', component: SaleOrderComponent},
  {path: 'saleOrders/history', component: HistorySaleOrderComponent},
  {path: 'saleOrders/history/details/:id', component: HistorySaleOrderDetailsComponent},
  {path: 'saleOrders/details/:id', component: SaleOrderComponent},
  {path: 'saleOrders/creator', component: SaleOrderCreatorComponent},
  {path: 'saleOrders/creator/add/:id', component: AddSaleOrderComponent},
  {path: 'clients', component: ClientComponent},
  {path: 'clients/details/:id', component: ClientDetailsComponent},
  {path: 'clients/add', component: AddClientComponent},
  {path: 'raports', component: RaportComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', component: HomeComponent}
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
