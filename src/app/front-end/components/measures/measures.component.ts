import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
// import { TicketService } from '../../service/ticketservice';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-measures',

    templateUrl: './measures.component.html',
    styleUrl: './measures.component.scss',

    providers: [MessageService],
})
export class MeasuresComponent implements OnInit {
    items: MenuItem[];

    subscription: Subscription;

    constructor(
        public messageService: MessageService,
        // public ticketService: TicketService
    ) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Basic Data',
                routerLink: 'measure-basic-data',
            },
            {
                label: 'Details',
                routerLink: 'measure-detail',
            },
            {
                label: 'Milestone',
                routerLink: 'measure-milestone',
            },
           
        ];

        // this.subscription = this.ticketService.paymentComplete$.subscribe(
        //     (personalInformation) => {
        //         this.messageService.add({
        //             severity: 'success',
        //             summary: 'Order submitted',
        //             detail:
        //                 'Dear, ' +
        //                 personalInformation.firstname +
        //                 ' ' +
        //                 personalInformation.lastname +
        //                 ' your order completed.',
        //         });
        //     }
        // );
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
