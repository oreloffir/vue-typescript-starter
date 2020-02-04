class Product {
    constructor(public name: string, public materials: string[]) {}

    public preparationTime() {
        return this.materials.length * 1000;
    }

    public toString() {
        return `Product name: ${this.name} \nMaterials: ${this.materials}`;
    }
}

export default Product;
