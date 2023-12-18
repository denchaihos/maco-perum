import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { DcontrollerRoutingModule } from './dcontroller-routing.module';
import {DcontrollerComponent} from './dcontroller.component';
import {MainComponent} from './main/main.component';
import {MeasureBasicDataComponent} from './measure-basic-data/measure-basic-data.component'


@NgModule({
  declarations: [DcontrollerComponent,MainComponent,MeasureBasicDataComponent],
  imports: [
    CommonModule,
		FormsModule,
		DcontrollerRoutingModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,ToastModule,StepsModule,ButtonModule,CardModule,AccordionModule,TableModule
  ],
  
})
export class DcontrollerModule { }


