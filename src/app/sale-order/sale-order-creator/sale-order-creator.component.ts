import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Client} from '../../models/Client.model';
import {ClientService} from '../../client/client.service';
import {EnterpriseType} from '../../models/EnterpriseType.model';


@Component({
  selector: 'app-sale-order-creator',
  templateUrl: './sale-order-creator.component.html',
  styleUrls: []
})
export class SaleOrderCreatorComponent implements OnInit {

  clients: Client[];

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.clients = data.payload;
    });
  }

  getEnterpriseType(enterprise: string) {
    return EnterpriseType[enterprise];
  }
}
