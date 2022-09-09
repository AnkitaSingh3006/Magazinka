import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public totalItem: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getProduct()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }


}
