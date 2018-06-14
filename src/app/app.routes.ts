import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/components/list-page.component';


export const appRoutes: Routes = [
    {
        path: 'list',
        component: ListPageComponent,
    }, {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {});