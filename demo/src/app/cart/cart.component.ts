import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product: any = [];
  public grandTotal !: number;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getProduct()
      .subscribe(res => {
        this.product = res;
        this.grandTotal = this._cartService.getTotalPrice();
      })

  }

  removeItem(obj:any){
    this._cartService.removeCartItem(obj);
  }

  emptycart(){
    this._cartService.removeAllCart();
  }

}
