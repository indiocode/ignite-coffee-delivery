import { Address } from './Address';
import { Coffee } from './Coffee';

export type PaymentMethod = 'credit' | 'debit' | 'money';

export interface ItemOrder {
	product: Coffee;
	quantity: number;
}

export interface Order {
	items: ItemOrder[];
	address: Address | null;
	paymentMethod: PaymentMethod | null;
}
