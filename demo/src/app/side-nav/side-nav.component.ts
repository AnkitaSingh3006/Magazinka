import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { FormBuilder } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { FilterationDataService } from '../filteration-data.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'All Categories',
    children: [
      {
        name: 'Electronics',
        children: [
          { name: 'Cell Phones & Smartphones' }],
      },
      {
        name: 'Business & Industrial',
        children: [{ name: 'Components Sensor' }, { name: 'Component Acceleration Sensor' }, { name: 'Component Fiber Optic Sensors' }, { name: 'Metalworking Finishing Machines' }],
      },
      {
        name: 'Computers',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
      {
        name: 'Consumer Electronics',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
      {
        name: 'Home & Garden',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
      {
        name: 'Collectibles',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(public _matBottomSheet: MatBottomSheet, private _formBuilder: FormBuilder, private _router: Router, private message: FilterationDataService) {

    this.dataSource.data = TREE_DATA;

  }

  ngOnInit(): void {
  }

  /***bottom sheet***/

  onTriggerSheetClick() {
    this._matBottomSheet.open(BottomSheetComponent)
  }

  /***collapsed button****/

  panelOpenState = false;


  /***Nested Tree***/

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  checkboxArray: any = [
    {
      id: 1,
      type: "checkbox",
      name: "New",
      checked: false,
    },
    {
      id: 2,
      type: "checkbox",
      name: "Lay idle",
      checked: false
    },
    {
      id: 3,
      type: "checkbox",
      name: "Was used",
      checked: false,
    },
    {
      id: 4,
      type: "checkbox",
      name: "Shabby",
      checked: false,
    }
  ]

  changeValue() {

    // console.log('---',this.checkboxArray);
    this.message.sendMesage(this.checkboxArray);
  }


}

