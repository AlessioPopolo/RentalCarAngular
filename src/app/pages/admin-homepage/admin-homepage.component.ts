import {Component, OnInit} from '@angular/core';
import {usersTableConfig} from "../../resources/UsersTableConfig";
import {addButton} from "../../resources/AddButtonConfig";
import {UtenteService} from "../../service/utente.service";

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

  constructor(private utenteService: UtenteService) { }

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
}
