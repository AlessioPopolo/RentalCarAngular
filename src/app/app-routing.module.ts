import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomepageComponent} from "./pages/admin-homepage/admin-homepage.component";
import {AutoComponent} from "./pages/auto/auto.component";
import {FormPageComponent} from "./pages/form-page/form-page.component";
import {ReservationComponent} from "./pages/reservation/reservation.component";

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full'},
  { path: 'admin', children: [
      {path: '', component: AdminHomepageComponent},
      {path: 'add/utente', component: FormPageComponent},
      {path: 'edit/:id/utente', component: FormPageComponent},
    ]
  },
  { path: 'auto', children: [
      {path: '', component: AutoComponent},
      {path: 'add/auto', component: FormPageComponent},
      {path: 'edit/:id/auto', component: FormPageComponent},
    ]
  },
  { path: 'prenotazioni', children: [
      {path: 'all', component: ReservationComponent},
      {path: 'edit/:id/prenotazioni', component: FormPageComponent}
    ]
  }
];


/*{path: 'homepage/customers', canActivate: [AdminAuthGuard],
  children: [*/


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
