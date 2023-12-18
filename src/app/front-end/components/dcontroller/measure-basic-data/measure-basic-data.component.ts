import { Component,OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-measure-basic-data',
  templateUrl: './measure-basic-data.component.html',
  styleUrl: './measure-basic-data.component.scss'
})
export class MeasureBasicDataComponent  implements OnInit {
  cities: City[] | undefined;
  items: MenuItem[];

  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];

    
        this.items = [
            {
                label: 'Basic Data',
                routerLink: '/buyer/measure-basic-data',
            },
            {
                label: 'Details',
                routerLink: '/buyer/measure-detail',
            },
            {
                label: 'Milestone',
                routerLink: '/buyer/measure-milestone',
            },
           
        ];
  }

}
