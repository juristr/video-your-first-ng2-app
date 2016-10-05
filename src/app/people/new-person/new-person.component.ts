import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css']
})
export class NewPersonComponent implements OnInit {

  @Output() onSubmitted:EventEmitter<any> = new EventEmitter();
  @Output() onCancel:EventEmitter<any> =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(newPerson) {
    this.onSubmitted.emit(newPerson);
  }

  cancel() {
    this.onCancel.emit();
  }

}
