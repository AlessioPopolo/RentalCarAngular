import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  title = "Add";
  destination!: string;

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(paramsId => {
      // @ts-ignore
      this.destination = paramsId.pop().toString();
    });

  }

}
