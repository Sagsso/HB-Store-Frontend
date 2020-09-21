import { Product } from '../products/product/product.model';

export interface Item {
    product: Product,
    quantity: number,
}
