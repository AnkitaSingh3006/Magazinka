import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FilterationDataService } from '../filteration-data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  constructor(private message: FilterationDataService, private _cartService: CartService, private _dialog: MatDialog) {


  }

  model: any;
  time: any;
  checkboxArray: any;
  option1: any = [];
  // option2: any = [];
  // option3: any = [];
  opt1Selected: any;
  // opt2Selected: any;
  // opt3Selected: any;
  cba: any;


  public catFilter: any;
  ngOnInit(): void {

    this.message.name.subscribe(cba => {
      console.log(cba)

      if (cba && cba.length) {
        let catFilter = cba.filter((item: any) => {
          return item.checked == true
        }).map((item: any) => item.id)

        this.catFilter = catFilter;
        // console.log('collapsableFilter catFilter', catFilter)
      }
    })


    this.model = [
      {
        "id": 1,
        "filterOption1": 1,
        // "filterOption2": 3,
        // "filterOption3": 2,
        "checkBoxId": 2,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img7.jpg",
        "desc": "One string Bonsai description",
        "amount": "$128.99",
        "status": "Worldwide shifting available Buyers protection possible",
        "rating": "4.99",
        "kindOf": "Useless first",
        "category": "Lay idle"
      },
      {
        "id": 2,
        "filterOption1": 1,
        // "filterOption2": 3,
        // "filterOption3": 2,
        "checkBoxId": 4,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "desc": "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat",
        "amount": "$128.48",
        "status": "Worldwide shifting available Buyers protection possible",
        "rating": "4.99",
        "kindOf": "Useless first",
        "category": "Shabby"
      },
      {
        "id": 3,
        "filterOption1": 2,
        // "filterOption2": 3,
        // "filterOption3": 4,
        "checkBoxId": 4,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img6.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$13.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05",
        "kindOf": "Necessary Second",
        "category": "Shabby"
      },
      {
        "id": 4,
        "filterOption1": 2,
        // "filterOption2": 5,
        // "filterOption3": 4,
        "checkBoxId": 4,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img2.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$1.95",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56",
        "kindOf": "Necessary Second",
        "category": "Shabby"
      },
      {
        "id": 5,
        "filterOption1": 3,
        // "filterOption2": 5,
        // "filterOption3": 1,
        "checkBoxId": 4,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img3.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$11.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05",
        "kindOf": "Useful Third",
        "category": "Shabby"
      },
      {
        "id": 6,
        "filterOption1": 3,
        // "filterOption2": 1,
        // "filterOption3": 5,
        "checkBoxId": 3,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img4.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$13.95",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56",
        "kindOf": "Useful Third",
        "category": "Was used"
      },
      {
        "id": 7,
        "filterOption1": 4,
        // "filterOption2": 1,
        // "filterOption3": 5,
        "checkBoxId": 3,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img11.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$49.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05",
        "kindOf": "Something Fourth",
        "category": "Was used"
      },
      {
        "id": 8,
        "filterOption1": 4,
        // "filterOption2": 2,
        // "filterOption3": 3,
        "checkBoxId": 3,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img9.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$13.95",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56",
        "kindOf": "Something Fourth",
        "category": "Was used"
      },
      {
        "id": 9,
        "filterOption1": 1,
        // "filterOption2": 2,
        // "filterOption3": 3,
        "checkBoxId": 4,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img1.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$49.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05",
        "kindOf": "Useless first",
        "category": "Shabby"
      },
      {
        "id": 10,
        "filterOption1": 2,
        // "filterOption2": 4,
        // "filterOption3": 5,
        "checkBoxId": 1,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img5.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$12.95",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56",
        "kindOf": "Necessary Second",
        "category": "New"
      },
      {
        "id": 11,
        "filterOption1": 3,
        // "filterOption2": 4,
        // "filterOption3": 1,
        "checkBoxId": 2,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img8.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$9.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05",
        "kindOf": "Useful Third",
        "category": "Lay idle"
      },
      {
        "id": 12,
        "filterOption1": 4,
        // "filterOption2": 3,
        // "filterOption3": 2,
        "checkBoxId": 1,
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img12.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$23.25",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56",
        "kindOf": "Something Fourth",
        "category": "New"
      }
    ]

    this.option1 = [
      { id: 1, name: "Useless first" },
      { id: 2, name: "Necessary second" },
      { id: 3, name: "Useful third" },
      { id: 4, name: "Something fourth" },
    ]
    // this.option2 = [
    //   { id: 1, name: "Condition" },
    //   { id: 2, name: "New" },
    //   { id: 3, name: "Lazy idle" },
    //   { id: 4, name: "Was Used" },
    //   { id: 5, name: "Shabby" },
    // ]
    // this.option3 = [
    //   { id: 1, name: "Delivery options" },
    //   { id: 2, name: "Post" },
    //   { id: 3, name: "Pickup" },
    //   { id: 4, name: "Pigeon" },
    //   { id: 5, name: "Space" },
    // ]
    // this.opt1Selected = 4;
    // this.opt2Selected = 1;
    // this.opt3Selected = 2;

  }


  /********************filter code*******************/

  // selectedOption: Array<any> = [];
  // selectedOptionFilter: string = "";

  // changeValue() {

  //   let option = new Option();
  //   this.selectedOptionFilter = this.selectedOption.toString();
  // }


  /****************form console*****************/

  // loginUser(item: any) {
  //   console.log(item)
  // }


  /*****************Add to cart*****************/

  addtoCart(obj: any, event: any) {
    event.stopPropagation();
    this._cartService.addtoCart(obj);

  }

  /*****************Dialog*******************/

  openDialog(desc: any, amount: any, status: any, obj: any) {

    console.log(amount)

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      desc: desc,
      amount: amount,
      status: status,
    };

    const DialogRef = this._dialog.open(DialogComponent, dialogConfig);

    DialogRef.afterClosed().subscribe(
      data => {
        this.result = data
        this.updateObject(obj)
      })


  }
  result: any = { desc: '', amount: '', status: '' }
  updateObject(obj: any) {
    obj.desc = this.result.desc
    obj.amount = this.result.amount
    obj.status = this.result.status
  }


}
