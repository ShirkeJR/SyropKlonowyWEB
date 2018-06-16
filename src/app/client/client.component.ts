import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Client} from '../models/Client.model';
import {ClientService} from './client.service';
import {EnterpriseType} from '../models/EnterpriseType.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: []
})
export class ClientComponent implements OnInit {

  clients: Client[];

  constructor(private router: Router, private clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.getAll().subscribe(data => {
      this.clients = data.payload;
    });
  }

  getEnterpriseType(enterprise: string) {
    return EnterpriseType[enterprise];
  }
}
