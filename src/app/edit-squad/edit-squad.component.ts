import { Component, Input, OnInit } from '@angular/core';
import { SquadService } from '../squad.service';

@Component({
  selector: 'app-edit-squad',
  templateUrl: './edit-squad.component.html',
  styleUrls: ['./edit-squad.component.css'],
  providers: [SquadService]
})
export class EditSquadComponent implements OnInit {

  @Input() selectedSquad;

  constructor(private squadService: SquadService) { }

  ngOnInit() {
  }

  beginUpdatingSquad(squadToUpdate){
    this.squadService.updateSquad(squadToUpdate);
  }

  beginDeletingSquad(squadToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.squadService.deleteSquad(squadToDelete);
    }
  }

}
