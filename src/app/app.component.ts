import { Component } from '@angular/core';

import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'CashRegister';

  constructor(
    private _productsService: ProductsService,
  ){}


  ngOnInit(){
    console.log(this._productsService.tab_products)
  }

}
