import { Component } from '@angular/core';
import { PaniersService } from 'src/app/services/paniers.service';
import { ToastsService } from 'src/app/services/toasts.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  constructor(
    protected _paniersService: PaniersService,
    private _toastsService: ToastsService
  ){}

  validateCart(){
    this._paniersService.panier = [];
    this._toastsService.show('Panier validé', { classname: 'bg-success text-light', delay: 3000 })
  }

  getTotalProducts(){
    let total_products = 0;
    this._paniersService.panier.forEach(article => {
      total_products += article.quantite;
    });
    return total_products;
  }

  getTotalPrice(){
    let total_price = 0;
    this._paniersService.panier.forEach(article => {
      total_price += article.product.price * article.quantite;
    });
    return total_price;
  }
}
