import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { HomeAccountsComponent } from './home-accounts/home-accounts.component';
import { LoggerService } from './logger.service';


@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    AccountComponent,
    HomeAccountsComponent
  ],
  imports: [
  BrowserModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
