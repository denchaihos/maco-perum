import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MeasuresComponent} from './measures.component';
import {MeasureBasicDataComponent} from './measure-basic-data/measure-basic-data.component'
import {MeasureDetailComponent} from './measure-detail/measure-detail.component'
import {MeasureMilestoneComponent} from './measure-milestone/measure-milestone.component'

const routes: Routes = [
  // { path: '', component: MeasuresComponent },
  // { path: 'measure-basic-data', component: MeasureBasicDataComponent }

  {
    path: '',
    component: MeasuresComponent,
   
    children: [
      {
        path: '', redirectTo: 'measure-basic-data', pathMatch: 'full',
        
        
      },
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
export class MeasuresRoutingModule { }
