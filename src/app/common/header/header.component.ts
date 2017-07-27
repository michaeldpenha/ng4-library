/**
 * Auhtor : Michael Dpenha
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle;
  constructor() {
    
   }

  ngOnInit() {
    this.headerTitle = "Angular UI Components";
  }
  
}
