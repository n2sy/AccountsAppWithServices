import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdd = new EventEmitter<{name : string, status : string}>();
  constructor() { }

  ngOnInit() {
  }

  AddAccount(n, s) {
    this.accountAdd.emit({
      name : n,
      status : s
    });
  }

}
