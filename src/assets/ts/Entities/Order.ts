import Product from '@/assets/ts/Entities/Product';
import ProductsFactory from '@/assets/ts/Entities/ProductsFactory';

const maxProducts = 10;

class Order {
    private readonly _id: number;
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
        let preparationTime = 0;

        this.products.map(product => preparationTime += product.preparationTime());

        return preparationTime;
    }

    get numOfProducts(): number {
        return this.products.length;
    }

    public addProduct(productName: string): void {
        if (this.numOfProducts >= maxProducts) {
            return;
        }

        const product = ProductsFactory.createProduct(productName);

        if (product && product instanceof Product) {
            this.products.push(product);
        }
    }
}

export default Order;
