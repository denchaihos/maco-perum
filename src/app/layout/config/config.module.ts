import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipModule } from 'primeng/chip';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
// https://www.youtube.com/watch?v=PDMd35Uamwg
// https://github.com/ankush1802/Angular14GoogleMaps


import { AppConfigComponent } from './app.config.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SidebarModule,
        RadioButtonModule,
        ButtonModule,
        InputSwitchModule,ChipModule,MenuModule,MegaMenuModule,MenubarModule,PanelMenuModule
    ],
    declarations: [
        AppConfigComponent
    ],
    exports: [
        AppConfigComponent,InputSwitchModule,ChipModule,MenuModule,MegaMenuModule,MenubarModule,PanelMenuModule
    ]
})
export class AppConfigModule { }
