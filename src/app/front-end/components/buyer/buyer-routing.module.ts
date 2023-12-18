import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyerComponent} from './buyer.component';
import {MainComponent} from './main/main.component';
import {MeasureBasicDataComponent} from './measure-basic-data/measure-basic-data.component';
import {MeasureDetailComponent} from './measure-detail/measure-detail.component';
import {MeasureMilestoneComponent} from './measure-milestone/measure-milestone.component';


const routes: Routes = [
  {
    path: '',
    component: BuyerComponent,   
    children: [
      {
        path: '', redirectTo: 'main', pathMatch: 'full',        
        
      },
      { path: 'main', component: MainComponent },
      { path: 'measure-basic-data', component: MeasureBasicDataComponent },
      { path: 'measure-detail', component: MeasureDetailComponent },
      { path: 'measure-milestone', component: MeasureMilestoneComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
