import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './front-end/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./front-end/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    // { path: 'uikit', loadChildren: () => import('./front-end/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    // { path: 'utilities', loadChildren: () => import('./front-end/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./front-end/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    // { path: 'blocks', loadChildren: () => import('./front-end/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    // { path: 'pages', loadChildren: () => import('./front-end/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'map', loadChildren: () => import('./front-end/components/map/map.module').then(m => m.MapModule) },
                    { path: 'measures', loadChildren: () => import('./front-end/components/measures/measures.module').then(m => m.MeasuresModule) },
                    { path: 'buyer', loadChildren: () => import('./front-end/components/buyer/buyer.module').then(m => m.BuyerModule) },
                    { path: 'manager', loadChildren: () => import('./front-end/components/manager/manager.module').then(m => m.ManagerModule) },
                    { path: 'director', loadChildren: () => import('./front-end/components/director/director.module').then(m => m.DirectorModule) },
                    { path: 'dcontroller', loadChildren: () => import('./front-end/components/dcontroller/dcontroller.module').then(m => m.DcontrollerModule) },


                ]
            },
            { path: 'auth', loadChildren: () => import('./front-end/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./front-end/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
