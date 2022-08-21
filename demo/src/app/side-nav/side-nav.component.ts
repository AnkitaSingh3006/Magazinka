import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  toppings = this._formBuilder.group({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
    filter5: false,
    filter6: false,
  });

  constructor(public _matBottomSheet: MatBottomSheet , private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  /***bottom sheet***/

  onTriggerSheetClick() {
    this._matBottomSheet.open(BottomSheetComponent)
  }

  /***collapsed button****/
  
  panelOpenState = false;

  

}
