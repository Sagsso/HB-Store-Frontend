import { SaleDetail } from './sale-detail.model';

export interface Sale {
    id: number,
    saleDate: Date,
    price: number,
    pay: number,
    client: string,
    saleDetails: Array<SaleDetail>
}
