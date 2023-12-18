import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './front-end/components/notfound/notfound.component';
import { ProductService } from './front-end/service/product.service';
import { CountryService } from './front-end/service/country.service';
import { CustomerService } from './front-end/service/customer.service';
import { EventService } from './front-end/service/event.service';
import { IconService } from './front-end/service/icon.service';
import { NodeService } from './front-end/service/node.service';
import { PhotoService } from './front-end/service/photo.service';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
