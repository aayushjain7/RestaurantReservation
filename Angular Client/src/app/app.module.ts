import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";

import { LoginComponent } from "./login/login.component";
import { ReservationCreateComponent } from "./components/reservation-create/reservation-create.component";
import { ReservationListComponent } from "./components/reservation-list/reservation-list.component";
import { ReservationEditComponent } from "./components/reservation-edit/reservation-edit.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ApiService } from "./service/api.service";
import { AuthService } from "./service/auth.service";
import { AuthGuardService } from "./service/auth-guard.service";
import {
  AuthInterceptor,
  UnauthorizedInterceptor,
} from "./service/auth.interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    ReservationCreateComponent,
    ReservationListComponent,
    ReservationEditComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true,
    },
    { provide: APP_BASE_HREF, useValue: "/" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
