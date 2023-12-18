import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    username!: string;
    password!: string;

    constructor(public layoutService: LayoutService, public router: Router) {
        this.username = 'Admin';
        this.password = '123456';
    }

    login() {
        sessionStorage.setItem('token', 'Y');
        sessionStorage.setItem('role', this.username);
        let nav = this.username.toLowerCase();
        // if (nav == 'admin') {
        //     sessionStorage.setItem('userRole', 'admin');
        //     this.router.navigate(['dcontroller']);
        // } else {
        //     sessionStorage.setItem('userRole', 'user');
        //     this.router.navigate([nav]);
        // }

        switch (nav) {
            case 'admin': {
                sessionStorage.setItem('userRole', 'base,buyer,manager,director,dcontroller');
                this.router.navigate(['dcontroller']);
                break;
            }
            case 'manager': {
                sessionStorage.setItem('userRole', 'base,buyer,manager');
                this.router.navigate([nav]);
                break;
            }
            case 'director': {
                sessionStorage.setItem('userRole', 'base,buyer,manager,director');
                this.router.navigate([nav]);
                break;
            }
            case 'buyer': {
                sessionStorage.setItem('userRole', 'base,buyer');
                this.router.navigate([nav]);
                break;
            }
        }
    }
}
