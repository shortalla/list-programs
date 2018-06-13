import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { appRouting } from '../app.routes';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ApiService } from './api/api.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    appRouting
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
