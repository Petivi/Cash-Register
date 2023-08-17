import { Component } from '@angular/core';

import { ProductsService } from './services/products.service';
import { Product } from './models/product';
import { Categorie } from './models/categorie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  private tab_products: Array<Product> = [];
  protected tab_products_displayed: Array<Product> = [];
  protected tab_categories: Array<Categorie> = [];
  protected tab_categories_filter: Array<Categorie> = [];

  constructor(
    private _productsService: ProductsService,
  ){}


  ngOnInit(){
    this.tab_products = this._productsService.tab_products;
    this.tab_categories = this._productsService.tab_categories;




    this.tab_products_displayed = this.tab_products
    console.log(this.tab_products_displayed)
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

    /* Tab Filters */
    this.tab_products_displayed = this.tab_products.filter(product => {
      // let offre_nom = this._utilsService.normalizeString(offre.nom);
      
      // let condSearchbar = offre_nom.includes(searchBarVal);
      // let condPrix = offre.prix >= this.tab_filtres_selected.prix_min && offre.prix <= this.tab_filtres_selected.prix_max;
      
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

      return (condCategorie)
    });
    /* Tab Filters */
  }

}
