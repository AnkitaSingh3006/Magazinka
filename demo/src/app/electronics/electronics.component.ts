import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  model: any;
  constructor() { }

  ngOnInit(): void {
    this.model=[
      {
        "src":"hgj",
        "desc":"fgfdg",
        "amount":"4.5",
        "status":"ghj",
        "rating":"56"
      }
    ]
  }

}
