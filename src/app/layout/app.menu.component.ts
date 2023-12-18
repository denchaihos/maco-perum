import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    role:string = 'admin';

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        console.log(this.role);
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        role:'base',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                ],
            },
            {
                label: 'Work App',           

                items: [
                    {
                        label: 'Buyer',
                        icon: 'pi pi-fw pi-id-card',
                        role:'buyer',
                        routerLink: ['/buyer'],
                    },
                    {
                        label: 'Manager',
                        icon: 'pi pi-fw pi-check-square',
                        role:'manager',
                        routerLink: ['/manager'],
                    },
                    {
                        label: 'Director',
                        icon: 'pi pi-fw pi-bookmark',
                        role:'director',
                        routerLink: ['/director'],
                    },
                    {
                        label: 'DController',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        role:'dcontroller',
                        items:[
                            { label: 'Main', icon: 'fa-plus', routerLink: ['/dcontroller/main'], routerLinkActiveOptions: { exact: true } },
                            { label: 'CreateMesure', icon: 'fa-plus', routerLink: ['/dcontroller/measure-basic-data'],  },
                        ]
                     
                        
                     
                    },
                    
                    
                ],
            },

            {
                label: 'Utilities',
                items: [
                    {
                        label: 'Facebook Group',
                        icon: 'pi pi-fw pi-prime',
                        role:'base',
                        routerLink: ['/utilities/icons'],
                    },
                    {
                        label: 'Forum',
                        icon: 'pi pi-fw pi-desktop',
                        role:'base',
                        url: ['https://www.primefaces.org/primeflex/'],
                        target: '_blank',
                    },
                ],
            },

            {
                label: 'Document',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-question',
                        role:'base',
                        routerLink: ['/documentation'],
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-search',
                        role:'base',
                        url: ['https://github.com/primefaces/sakai-ng'],
                        target: '_blank',
                    },
                ],
            },
        ];
    }
}
