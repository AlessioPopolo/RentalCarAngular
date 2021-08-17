import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { Ng2SearchPipeModule} from "ng2-search-filter";
import { PaginationPipe} from "./pagination.pipe";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
