import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClientService} from '../client.service';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: []
})
export class ClientDetailsComponent implements OnInit {

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit() {

  }
}
