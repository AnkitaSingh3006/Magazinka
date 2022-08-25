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
        "src":"	https://ecommerce-angular-demo.setproduct.com/assets/images/img3.jpg",
        "desc":"One string Bonsai description",
        "amount":"$11.68",
        "status":"Worldwide shifting available Buyers protection possible",
        "rating":"4.99"
      },
      {
        "src":"	https://ecommerce-angular-demo.setproduct.com/assets/images/img9.jpg",
        "desc":"Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat",
        "amount":"$12.48",
        "status":"Worldwide shifting available Buyers protection possible",
        "rating":"4.99"
      },
      {
        "src":"	https://ecommerce-angular-demo.setproduct.com/assets/images/img12.jpg",
        "desc":"Vintage Typewriter to post awesome stories about UI design and web development",
        "amount":"$49.50",
        "status":"Eligible for shipping to mars or somewhere else",
        "rating":"4.05"
      },
      {
        "src":"https://ecommerce-angular-demo.setproduct.com/assets/images/img11.jpg",
        "desc":"Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount":"$13.95",
        "status":"1258 bids, 359 watches $5.95 for shipping",
        "rating":"4.56"
      },
      {
        "src":"https://ecommerce-angular-demo.setproduct.com/assets/images/img8.jpg",
        "desc":"Vintage Typewriter to post awesome stories about UI design and web development",
        "amount":"$49.50",
        "status":"Eligible for shipping to mars or somewhere else",
        "rating":"4.05"
      },
      {
        "src":"https://ecommerce-angular-demo.setproduct.com/assets/images/img7.jpg",
        "desc":"Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount":"$13.95",
        "status":"1258 bids, 359 watches $5.95 for shipping",
        "rating":"4.56"
      },
      {
        "src":"https://ecommerce-angular-demo.setproduct.com/assets/images/img8.jpg",
        "desc":"Vintage Typewriter to post awesome stories about UI design and web development",
        "amount":"$49.50",
        "status":"Eligible for shipping to mars or somewhere else",
        "rating":"4.05"
      },
      {
        "src":"https://ecommerce-angular-demo.setproduct.com/assets/images/img7.jpg",
        "desc":"Lee Pucker design. Leather botinki for handsome designers. Free shipping",
        "amount":"$13.95",
        "status":"1258 bids, 359 watches $5.95 for shipping",
        "rating":"4.56"
      }
    ]
  }

}
