import {Component, Input, OnInit} from '@angular/core';
import {CustomButtonConfig} from "../../resources/CustomButtonConfig";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonConfig!:CustomButtonConfig;
  @Input() destination!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
