/**
 * Author : Michael Dpenha (michaeld@xpanxion.co.in) 
 * While adding any new component in the application you need to import the component and then add to const routes.
 * Eg : 
 *       { path: '', pathMatch: 'full', component: <componentName> }
 *        path : The URL path of the route as a string.
 *        component: The component which should be loaded when the path is used.
 * 
 * For Nested navigations eg:
 *      {
 *      path: <URL Path>,
 *       component: <componentName>,
 *      children: [
 *           { path: <URL Path>, component: <childComponentName> }
 *       ]
 *   }
 *  
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/index';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { TooltipComponent } from './component/tooltip/tooltip.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'checkbox', pathMatch: 'full', component: CheckboxComponent },
    { path: 'tooltip', pathMatch: 'full', component: TooltipComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent,CheckboxComponent,TooltipComponent];
