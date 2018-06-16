import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WarehouseSectorComponent } from './warehouse-sector/warehouse-sector.component';
import { AddWarehouseSectorComponent } from './warehouse-sector/add-warehouse-sector/add-warehouse-sector.component';
import { WarehouseSectorService } from './warehouse-sector/warehouse-sector.service';
import { WarehouseSectorDetailsComponent } from './warehouse-sector/warehouse-sector-details/warehouse-sector-details.component';
import {ProductComponent} from './product/product.component';
import {ProductService} from './product/product.service';
import {DeliveryService} from './delivery/delivery.service';
import {DeliveryComponent} from './delivery/delivery.component';
import {DeliveryDetailsComponent} from './delivery/delivery-details/delivery-details.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HeaderComponent} from './header/header.component';
import {ClientComponent} from './client/client.component';
import {ClientService} from './client/client.service';
import {AddDeliveryComponent} from './delivery/add-delivery/add-delivery.component';
import {AddClientComponent} from './client/add-client/add-client.component';
import {HistoryDeliveryComponent} from './delivery/history-delivery/history-delivery.component';
import {HistoryDeliveryDetailsComponent} from './delivery/history-delivery/history-delivery-details/history-delivery-details.component';
import {HistorySaleOrderComponent} from './sale-order/history-sale-order/history-sale-order.component';
import {SaleOrderService} from './sale-order/sale-order.service';
import {SaleOrderComponent} from './sale-order/sale-order.component';
import {AddSaleOrderComponent} from './sale-order/sale-order-creator/add-sale-order/add-sale-order.component';
import {ProductFromOrderFilterPipe} from './sale-order/sale-order-creator/add-sale-order/product-from-order-filter.pipe';
import {SaleOrderCreatorComponent} from './sale-order/sale-order-creator/sale-order-creator.component';
import {ClientOrderFilterPipe} from './sale-order/sale-order-creator/client-order-filter.pipe';
import {HistorySaleOrderDetailsComponent} from './sale-order/history-sale-order/history-sale-order-details/history-sale-order-details.component';
import {ClientDetailsComponent} from './client/client-details/client-details.component';
import {HomeComponent} from './home/home.component';
import {HomeService} from './home/home.service';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {ProductFilterComponent} from './product/product-filter.component';
import {ProductsInWarehouseFilterComponent} from './warehouse-sector/warehouse-sector-details/products-in-warehouse-filter.component';
import {HistoryDeliveryFilterComponent} from './delivery/history-delivery/history-delivery-filter.component';
import {ClientFilterComponent} from './client/client-filter.component';
import {HistorySaleOrderFilterPipe} from './sale-order/history-sale-order/history-sale-order-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarehouseSectorComponent,
    AddWarehouseSectorComponent,
    WarehouseSectorDetailsComponent,
    ProductComponent,
    DeliveryComponent,
    HistoryDeliveryFilterComponent,
    DeliveryDetailsComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    ClientComponent,
    AddDeliveryComponent,
    AddClientComponent,
    HistoryDeliveryComponent,
    HistoryDeliveryDetailsComponent,
    HistorySaleOrderComponent,
    SaleOrderComponent,
    HistorySaleOrderDetailsComponent,
    AddSaleOrderComponent,
    ProductFromOrderFilterPipe,
    SaleOrderCreatorComponent,
    ClientOrderFilterPipe,
    ProductFilterComponent,
    ProductsInWarehouseFilterComponent,
    ClientDetailsComponent,
    HomeComponent,
    ProductDetailsComponent,
    ClientFilterComponent,
    HistorySaleOrderFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WarehouseSectorService, ProductService, DeliveryService, ClientService, SaleOrderService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
