import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerComponent} from './manager.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
   
    children: [
      {
        path: '', redirectTo: 'main', pathMatch: 'full',        
        
      },
      // { path: 'measure-basic-data', component: MeasureBasicDataComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
