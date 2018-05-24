import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WarehouseSectorComponent } from './warehouse-sector/warehouse-sector.component';
import { AddWarehouseSectorComponent } from './warehouse-sector/add-warehouse-sector/add-warehouse-sector.component';
import { WarehouseSectorService } from './shared/warehouse-sector/warehouse-sector.service';
import { WarehouseSectorDetailsComponent } from './warehouse-sector/warehouse-sector-details/warehouse-sector-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseSectorComponent,
    AddWarehouseSectorComponent,
    WarehouseSectorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WarehouseSectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
