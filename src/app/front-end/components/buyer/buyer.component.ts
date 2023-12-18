import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

import { Subscription } from 'rxjs';
import { LayoutService } from '../../../layout/service/app.layout.service';




@Component({
    selector: 'app-buyer',
    templateUrl: './buyer.component.html',
    styleUrl: './buyer.component.scss',
    providers: [MessageService],

})
export class BuyerComponent {
    constructor(public messageService: MessageService,
      public layoutService: LayoutService) {}
}
