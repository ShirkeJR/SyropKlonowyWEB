import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Client} from '../../models/Client.model';
import {ClientService} from '../client.service';
import {Address} from '../../models/Address.model';
import {EnterpriseType} from '../../models/EnterpriseType.model';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: []
})

export class AddClientComponent {

  enterprises: string[] = ['Sklep', 'Osoba prywatna', 'Hurtownia', 'Małe przedsiębiorstwo', 'Duże przedsiębiorstwo'];

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
      this.getTrueEnterpriseType(form.value.enterpriseType));

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

  getEnterpriseType(enterprise: string) {
    return EnterpriseType[enterprise];
  }

  getTrueEnterpriseType(enterpsise: string) {
    switch (enterpsise) {
      case 'Sklep':
        return 'SHOP';
      case 'Osoba prywatna':
        return 'PRIVATE_PERSON';
      case 'Hurtownia':
        return 'WHOLESALE';
      case 'Małe przedsiębiorstwo':
        return 'SMALL_ENTERPRISE';
      case 'Duże przedsiębiorstwo':
        return 'LARGE_ENTERPRISE';
      default:
        return 'unknown';
    }
  }
}

