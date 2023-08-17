export class Product {
    constructor(
        private id: number, 
        private name: string,
        private image: string,
        private price: number,
        private tva: number,
        private categorie: string,
    ) {}
}
