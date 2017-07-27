/**
 * Author : Michael Dpenha
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerLabel;
  constructor() { }

  ngOnInit() {
    this.footerLabel = "Copyright UI Dev Xpanxion";
  }

}
