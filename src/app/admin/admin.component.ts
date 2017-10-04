import { Component } from '@angular/core';
import { SquadService } from '../squad.service';
import { Squad } from '../squad.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SquadService]
})
export class AdminComponent {

  constructor(private squadService: SquadService) { }

  

  submitForm(name: string, description: string) {
    var newSquad: Squad = new Squad(name,description);
    this.squadService.addSquad(newSquad);
  }

}
