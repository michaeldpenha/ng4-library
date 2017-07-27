/**
 * Author : Michael Dpenha
 */
import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  listOfComponents:any ={};
  activeSidebarComponent: string="";
  sidebarSelectionSubscription : any;
  constructor(private sidebarService : SidebarService , private routeService : RouteService) { 
   
  }
  ngOnInit() {
    this.loadListOfComponents();
    this.sidebarSelectionSubscription = this.routeService.getUrlChangeEmitter().subscribe(item => this.setActiveClass(item));
  }
  private loadListOfComponents (){
    this.sidebarService.getListOfComponents().subscribe(result => {
      this.listOfComponents = result;
    });
  }
  public setActiveClass (val:string){
    let urlParams = val.split('/').join('');
    this.activeSidebarComponent = urlParams;
  }
  public getActiveClass (){
    return this.activeSidebarComponent;
  }
  ngOnDestroy(){
    this.sidebarSelectionSubscription.unsubscribe();
  }
}
