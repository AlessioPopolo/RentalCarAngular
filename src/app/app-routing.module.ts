import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminHomepageComponent} from "./pages/admin-homepage/admin-homepage.component";
import {AutoComponent} from "./pages/auto/auto.component";

const routes: Routes = [
  { path: '', component: AdminHomepageComponent },
  { path: 'auto', component: AutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
