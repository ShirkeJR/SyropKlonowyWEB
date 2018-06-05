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

@NgModule({
  declarations: [
    AppComponent,
    WarehouseSectorComponent,
    AddWarehouseSectorComponent,
    WarehouseSectorDetailsComponent,
    ProductComponent,
    DeliveryComponent,
    DeliveryDetailsComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    ClientComponent,
    AddDeliveryComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WarehouseSectorService, ProductService, DeliveryService, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
