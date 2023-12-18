import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];
    itemsProfile!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private router: Router) {
        this.setMenu();
    }

    async setMenu() {
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video',
                            },
                        ],
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash',
                    },
                    {
                        separator: true,
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link',
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-power-off',
                        command: () => {
                            this.onLogout();
                        },
                    },
                ],
            },

            {
                label: 'Logout',
                icon: 'pi pi-power-off',
                command: () => {
                    this.onLogout();
                },
            },
        ];

        this.itemsProfile = [
            {
                // label: 'ดำเนินการ',
                items: [
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print',
                                    },
                                ],
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List',
                            },
                        ],
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-power-off',
                        command: () => {
                            this.onLogout();
                        },
                    },
                ],
            },
        ];
    }
    async onLogout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('routmain');
        sessionStorage.removeItem('itemCid');
        sessionStorage.removeItem('itemStorage');
        sessionStorage.removeItem('fullname');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('hcode');
        sessionStorage.removeItem('start_in_date');
        sessionStorage.removeItem('end_in_date');
        sessionStorage.removeItem('start_out_date');
        sessionStorage.removeItem('end_out_date');
        sessionStorage.removeItem('start_back_date');
        sessionStorage.removeItem('end_back_date');
        sessionStorage.removeItem('start_receive_date');
        sessionStorage.removeItem('end_receive_date');
        // window.location.reload();
        this.router.navigate(['/auth/login']);
    }
}
