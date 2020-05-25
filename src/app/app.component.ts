import { Component, OnInit } from '@angular/core';
import { PnotifyService } from './pnotify.service';
import {Stack} from '@pnotify/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-pnotify';

  constructor(private pnotify: PnotifyService){

  }

  ngOnInit(){
    const myStack = new Stack({
      dir1: 'down',
      dir2: 'left',
      firstpos1: 25,
      firstpos2: 25,
      spacing1: 36,
      spacing2: 36,
      push: 'bottom',
      context: document.body
    });
    this.pnotify.getPNotifyAlert()({
      text: 'teste',
      stack: myStack
    });
  }
}
