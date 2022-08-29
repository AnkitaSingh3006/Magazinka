import { Component, OnInit } from '@angular/core';
import { dropdown } from '../dropdown';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  constructor() {}

  model: any;
  option1: dropdown[] = [];
  option2: dropdown[] = [];
  option3: dropdown[] = [];
  opt1Selected:any;
  opt2Selected:any;
  opt3Selected:any;


  ngOnInit(): void {
   
    this.model = [
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img7.jpg",
        "desc": "One string Bonsai description",
        "amount": "$128.99",
        "status": "Worldwide shifting available Buyers protection possible",
        "rating": "4.99"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img10.jpg",
        "desc": "Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat",
        "amount": "$128.48",
        "status": "Worldwide shifting available Buyers protection possible",
        "rating": "4.99"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img6.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$13.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img2.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$1.95",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img3.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$11.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img4.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$13.95",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img11.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$49.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img9.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$13.95",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img1.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$49.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img5.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$12.95",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img8.jpg",
        "desc": "Vintage Typewriter to post awesome stories about UI design and web development",
        "amount": "$9.50",
        "status": "Eligible for shipping to mars or somewhere else",
        "rating": "4.05"
      },
      {
        "src": "https://ecommerce-angular-demo.setproduct.com/assets/images/img12.jpg",
        "desc": "Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount": "$23.25",
        "status": "1258 bids, 359 watches $5.95 for shipping",
        "rating": "4.56"
      }
    ]

    this.option1=[
      {id:1,name:"Useless first"},
      {id:2,name:"Necessary second"},
      {id:3,name:"Useful third"},
      {id:4,name:"Something fourth"},
    ]
    this.option2=[
      {id:1,name:"Condition"},
      {id:2,name:"New"},
      {id:3,name:"Lazy idle"},
      {id:4,name:"Was Used"},
      {id:5,name:"Shabby"},
    ]
    this.option3=[
      {id:1,name:"Delivery options"},
      {id:2,name:"Post"},
      {id:3,name:"Pickup"},
      {id:4,name:"Pigeon"},
      {id:5,name:"Space"},
    ]
    this.opt1Selected=4;
    this.opt2Selected=1;
    this.opt3Selected=2;
    
  }

}

