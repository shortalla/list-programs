import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './modules/pages/list-page/components/list-page.component';
import { DetailsPageComponent } from './modules/pages/details-page/components/details-page.component';


export const appRoutes: Routes = [
    {
        path: 'list',
        component: ListPageComponent,
    }, {
        path: 'details/:id',
        component: DetailsPageComponent,
    }, {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {});