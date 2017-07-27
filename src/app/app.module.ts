/**
 * Author : Michael Dpenha
 * 
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule,routedComponents } from './app.routing';
import { CommonComponents,commonComponents  } from './common/index';
import { SidebarService } from './common/sidebar/sidebar.service';
import { RouteService } from './services/route.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    commonComponents
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [SidebarService,RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
