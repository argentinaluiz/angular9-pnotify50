import { Injectable } from '@angular/core';
import { error, defaultModules } from '@pnotify/core';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';

defaultModules.set(PNotifyBootstrap4, {});

@Injectable({
  providedIn: 'root'
})
export class PnotifyService {

  constructor() { }

  getPNotifyAlert() {
    return error;
  }
}
