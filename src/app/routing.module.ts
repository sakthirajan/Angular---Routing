import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { Page1Component } from './page1/page1.component'
import { Page2Component } from './page2/page2.component'

const routes: Routes = [
  { path: 'page1', component: Page1Component, pathMatch: 'full' },
  { path: 'page2', component: Page2Component },
  { path: '**', redirectTo: 'page1' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
export const routingComponents = [AppComponent, Page1Component, Page2Component]