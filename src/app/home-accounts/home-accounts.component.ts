import { Component, OnInit } from '@angular/core';
import { ListeAccountsService } from '../liste-accounts.service';

@Component({
  selector: 'app-home-accounts',
  templateUrl: './home-accounts.component.html',
  styleUrls: ['./home-accounts.component.css']
})
export class HomeAccountsComponent implements OnInit {
  accounts = [];

  constructor(private accountsService : ListeAccountsService) { }

  ngOnInit() {

    this.accounts = this.accountsService.getListAccounts();
  }

  onAddNewAccount(acc) {
    //this.accounts.push(acc);
    this.accountsService.addAccount(acc);
  }

}
