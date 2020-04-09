import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ListeAccountsService {
  listAccounts = [
    {
      name : 'Master Account',
      status : 'active'
    },
    {
      name : 'Test Account',
      status : 'inactive'
    },
    {
      name : 'User Account',
      status : 'hidden'
    }
  ];

  constructor(private logger : LoggerService) { }

  getListAccounts() {
    return this.listAccounts;
  }

  addAccount(acc) {
    this.listAccounts.push(acc);
  }

  updateStatus(id, newStatus) {
    this.listAccounts[id].status = newStatus;
    this.logger.logChangeStatus(this.listAccounts[id]);
  }
}
