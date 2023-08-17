import { Injectable } from '@angular/core';

import data from '../../assets/json/menu.json';

import { Product } from '../models/product';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public tab_products: Array<Product> = [];
  public tab_categories: Array<Categorie> = [];

  constructor() {
    data.categories.forEach(el => {
      /* Catégories */
      let categorie = new Categorie(el.name);
      this.tab_categories.push(categorie);
      /* Catégories */
      
      /* Products */
      el.products.forEach(element => {
        let product = new Product(element.id, element.name, element.image, element.price, element.tva, categorie.name)
        this.tab_products.push(product);
      });
      /* Products */

      
    });
   }
}
