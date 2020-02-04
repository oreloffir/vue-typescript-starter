import Product from '@/assets/ts/Entities/Product';

class ProductsFactory {
    public static createProduct(productName: string): Product | null {

        switch (productName.toLowerCase()) {
            case 'hamburger':
                return new Product(productName, ['Ban', 'Onion', 'Tomato', 'Lettuce', 'Pickles']);
            case 'pizza':
                return new Product(productName, ['Bread', 'Tomato sauce', 'Cheese', 'Olives']);
            case 'sandwich':
                return new Product(productName, ['Bread', 'Omelet', 'Cucumbers']);
            default:
                return null;
        }
    }
}

export default ProductsFactory;
