const maxProducts = 10;

class Order {
    private _id: number;
    private products: Product[];
    protected static counter = 1;

    constructor() {
        this._id = Order.counter++;
        this.products = new Array<Product>();
    }

    get id(): number {
        return this._id;
    }

    get preparationTime(): number {
        return this.numOfProducts * 100;
    }

    get numOfProducts(): number {
        return this.products.length;
    }

    public addProduct(product: Product): void {
        if (this.numOfProducts >= maxProducts) {
            return;
        }

        this.products.push(product);
    }
}

export default Order;
