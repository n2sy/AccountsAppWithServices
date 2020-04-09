import { Injectable } from '@angular/core';


export class LoggerService {

  constructor() { }

  logChangeStatus(acc) {
    console.log(acc.name + ' status changed to ' + acc.status);
    //console.log('test');
  }

}
