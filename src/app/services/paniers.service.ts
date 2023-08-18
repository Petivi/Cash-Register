import { Injectable } from '@angular/core';

import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class PaniersService {
  public panier: Array<Article> = [];

  constructor() { }
}
