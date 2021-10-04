import {Component, OnInit} from '@angular/core';
import {usersTableConfig} from "../../resources/UsersTableConfig";
import {addButton} from "../../resources/AddButtonConfig";
import {UtenteService} from "../../service/utente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {

  title = 'Rentalcar';
  tableConfig = usersTableConfig
  addButtonConfig = addButton
  destination: string = "add/utente";
  inMemoryItems!: any[];
  event!: string;
  object!: string;

  constructor(private utenteService: UtenteService, public router: Router) { }

  ngOnInit(): void {
    this.getUtenti();
  }

  getUtenti(): void {
    this.utenteService.getUtenti()
      .subscribe(utenti => {
        this.inMemoryItems = utenti;
        for (let i=0; i<utenti.length; i++){
          this.inMemoryItems[i].ruolo = utenti[i].ruolo.ruolo;
          let datadinascita = new Date(utenti[i].datadinascita);
          this.inMemoryItems[i].datadinascita = datadinascita.toLocaleDateString();
        }
      });
  }

  takeEvent($event: string) {
    this.event = $event;
  }
  doAction($event: any) {
    let object = $event;
    switch (this.event){
      case "edit":
        this.router.navigate(["admin/edit/" + object.id + "/utente"]);
        break;

      case "delete":
        this.deleteObj(object);
        break;
    }
  }

  deleteObj(object: any): void {
    this.inMemoryItems = this.inMemoryItems.filter(h => h !== object);
    this.utenteService.deleteUtente(object.id).subscribe();
  }
}
