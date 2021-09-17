import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { Ng2SearchPipeModule} from "ng2-search-filter";
import { PaginationPipe} from "./pagination.pipe";
import { FilterPipe} from "./filter.pipe";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminHomepageComponent } from './pages/admin-homepage/admin-homepage.component';
import { AutoComponent } from './pages/auto/auto.component';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerHomepageComponent } from './pages/customer-homepage/customer-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginationPipe,
    FilterPipe,
    NavBarComponent,
    AdminHomepageComponent,
    AutoComponent,
    ButtonComponent,
    FormComponent,
    FormPageComponent,
    FilterPipe,
    ReservationComponent,
    FooterComponent,
    CustomerHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
