/**
 * Author : Michael Dpenha
 */
import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Routes, RouterModule,Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


@Injectable()
export class RouteService {
  urlChange: EventEmitter<string> = new EventEmitter();
  constructor(private router: Router){
      router.events.subscribe((val) => {
        this.emitUrlChangeEvent(val);
    });
 }
  emitUrlChangeEvent(val){
    this.urlChange.emit(val['url'])
  }
  getUrlChangeEmitter() {
    return this.urlChange;
  }
}