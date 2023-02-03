import { Coffee } from './Coffee';

type PaymentMethod = 'credit' | 'debit' | 'money' | null;

export interface ItemOrder {
	product: Coffee;
	quantity: number;
}

export interface Order {
	// id: string;
	items: ItemOrder[];
	paymentMethod: PaymentMethod;
}
