import { Product } from './product.model';

export interface SaleDetail {
    id: number,
    quantity: number,
    price: number,
    product: Product
}
