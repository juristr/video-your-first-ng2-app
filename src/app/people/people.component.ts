import {Component, OnInit} from "@angular/core";

import {PeopleService} from "./people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  isAddingNewPerson = false;
  people = [];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService.fetchPeople()
      .subscribe(data => {
        this.people = data;
      });
  }

  onSubmit(newPerson) {
    this.people.push(newPerson);
    this.isAddingNewPerson = false;
  }

}
