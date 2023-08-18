import { Component } from '@angular/core';

import { ProductsService } from './services/products.service';
import { UtilsService } from './services/utils.service';
import { PaniersService } from './services/paniers.service';

import { Product } from './models/product';
import { Categorie } from './models/categorie';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  private tab_products: Array<Product> = [];
  protected tab_products_displayed: Array<Product> = [];
  
  protected filter_searchbar_value: string = '';
  protected tab_categories: Array<Categorie> = [];
  protected tab_categories_filter: Array<Categorie> = [];

  constructor(
    private _productsService: ProductsService,
    private _utilsService: UtilsService,
    private _paniersService: PaniersService
  ){}


  ngOnInit(){
    this.tab_products = this._productsService.tab_products;
    this.tab_categories = this._productsService.tab_categories;

    this.displayProducts();
  }

  filterCategories(categorie: Categorie){
    if(this.tab_categories_filter.indexOf(categorie) !== -1) {
      this.tab_categories_filter = this.tab_categories_filter.filter((value) => value != categorie);
    } else {
      this.tab_categories_filter.push(categorie);
    }

    this.displayProducts();
  }


  displayProducts(){
    let searchbar_val = this._utilsService.normalizeString(this.filter_searchbar_value);

    /* Tab Filters */
    this.tab_products_displayed = this.tab_products.filter(product => {
      let product_name = this._utilsService.normalizeString(product.name);
      
      let condSearchbar = product_name.includes(searchbar_val);
      
      let condCategorie = false;
      if(this.tab_categories_filter.length > 0){
        this.tab_categories_filter.forEach(element => {
          if(product.categorie === element.name){
            condCategorie = true;
          }
        });
      }else{
        condCategorie = true;
      }

      return (condSearchbar && condCategorie)
    });
    /* Tab Filters */
  }


  addToCart(product: Product){
    let article = new Article(product, 1);
    let product_already_in_cart = false;

    /* Check if article is already in cart */
    this._paniersService.panier.forEach(element => {
      if(element.product === product){
        element.quantite += 1;
        product_already_in_cart = true;
      }
    });

    /* If not, then add it */
    if(!product_already_in_cart){
      this._paniersService.panier.push(article);
    }

    console.log(this._paniersService.panier)
  }

}
