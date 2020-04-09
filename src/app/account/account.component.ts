import { Component, OnInit, Input } from '@angular/core';
import { ListeAccountsService } from '../liste-accounts.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() oneAccount;
  @Input() id : number;
  constructor(private serv : ListeAccountsService,
    private logger : LoggerService) { }

  ngOnInit() {
  }

  setTo(newStatus : string) {
    //this.oneAccount.status = newStatus;
    //console.log(this.oneAccount.name + ' status changed to ' + newStatus)
    this.serv.updateStatus(this.id, newStatus);
    //this.logger.logChangeStatus(this.oneAccount);

  }

}
