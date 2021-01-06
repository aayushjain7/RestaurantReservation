import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { AuthGuardService as AuthGuard } from "./service/auth-guard.service";

import { ReservationCreateComponent } from "./components/reservation-create/reservation-create.component";
import { ReservationListComponent } from "./components/reservation-list/reservation-list.component";
import { ReservationEditComponent } from "./components/reservation-edit/reservation-edit.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "auth" },
  { path: "auth", component: LoginComponent },
  {
    path: "create-reservation",
    component: ReservationCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "edit-reservation/:id",
    component: ReservationEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "reservations-list",
    component: ReservationListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
