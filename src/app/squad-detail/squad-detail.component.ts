import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Squad } from '../squad.model';
import { SquadService } from '../squad.service';

@Component({
  selector: 'app-squad-detail',
  templateUrl: './squad-detail.component.html',
  styleUrls: ['./squad-detail.component.css'],
  providers: [SquadService]
})
export class SquadDetailComponent implements OnInit {
  squadId: string;
  squadToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private squadService: SquadService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.squadId = urlParameters['id'];
    });

   this.squadToDisplay = this.squadService.getSquadById(this.squadId);
  }

}
