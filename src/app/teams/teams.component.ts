import { Component, OnInit } from '@angular/core';
import { Squad } from '../squad.model';
import { Router } from '@angular/router';
import { SquadService } from '../squad.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [SquadService]
})
export class TeamsComponent implements OnInit {
  squads: FirebaseListObservable<any[]>;
   currentRoute: string = this.router.url;

  constructor(private router: Router, private squadService: SquadService) { }

  ngOnInit() {
    this.squads = this.squadService.getSquads();
  }

  goToDetailPage(clickedSquad) {
    this.router.navigate(['squads', clickedSquad.$key]);
  };
}
