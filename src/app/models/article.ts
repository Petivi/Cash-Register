import { Product } from "./product";

export class Article {

    constructor(
        public product: Product,
        public quantite: number
    ){}
}
