import { TestBed, inject } from '@angular/core/testing';
import {EventEmitter} from '@angular/core';
import { RouteService } from './route.service';
import { Routes, RouterModule,Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
describe('RouteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteService]
    });
  });

  it('should be created', inject([RouteService], (service: RouteService) => {
    expect(service).toBeTruthy();
  }));
});
