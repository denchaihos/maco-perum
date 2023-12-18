import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DcontrollerComponent} from './dcontroller.component';
import {MainComponent} from './main/main.component';
import {MeasureBasicDataComponent} from './measure-basic-data/measure-basic-data.component'


const routes: Routes = [
  {
    path: '',
    component: DcontrollerComponent,   
    
    children: [
      {
        path: '', redirectTo: 'main', pathMatch: 'full',        
        
      },
      { path: 'main', component: MainComponent, },
      { path: 'measure-basic-data', component: MeasureBasicDataComponent },
      // { path: 'measure-detail', component: MeasureDetailComponent },
      // { path: 'measure-milestone', component: MeasureMilestoneComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcontrollerRoutingModule { }
