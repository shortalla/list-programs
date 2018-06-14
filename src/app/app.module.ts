import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ListPageModule } from './modules/pages/list-page/list-page.module';

import { appRouting } from './app.routes';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ListPageModule,
    StoreModule.forRoot({}),
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
