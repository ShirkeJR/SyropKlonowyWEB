import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Client} from '../../models/Client.model';
import {ClientService} from '../client.service';
import {Address} from '../../models/Address.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: []
})

export class AddClientComponent {

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) {

  }

  addClient(form: NgForm): void {
    const address = new Address(
      form.value.street,
      form.value.buildingNumber,
      form.value.city,
      form.value.zipCode);
    const client = new Client(
      form.value.name,
      form.value.company,
      address,
      form.value.enterpriseType);

    this.clientService.createClient(client).subscribe(data => {
      if (Boolean(data.ok).valueOf()) {
        alert('Client został dodany');
        this.router.navigate(['clients']);
      } else {
        alert('Nie poprawny product');
      }
      console.log(data.ok);
    });
  }
}

