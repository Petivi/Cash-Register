export class Product {
    constructor(
        public id: number, 
        public name: string,
        public image: string,
        public price: number,
        public tva: number,
        public categorie: string,
    ) {}
}
