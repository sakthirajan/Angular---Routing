import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RoutingModule,routingComponents } from './routing.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//import { Page1Component } from './page1/page1.component';
//import { Page2Component } from './page2/page2.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [HelloComponent, routingComponents],
  bootstrap: [AppComponent]
})
export class AppModule { }
