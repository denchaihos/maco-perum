import { Component,OnInit  } from '@angular/core';
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

  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }

}
