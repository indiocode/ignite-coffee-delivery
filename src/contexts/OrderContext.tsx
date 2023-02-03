import { createContext, ReactNode, useReducer } from 'react';
import { Order, ItemOrder } from '~/models/Order';
import { orderReducer } from '~/reducers/order/reducer';
import {
	addNewItemAction,
	addOneItemAction,
	removeItemAction,
	removeOneItemAction,
} from '~/reducers/order/action';

interface OrderContextType {
	order: Order;
	addNewItem: (item: ItemOrder) => void;
	removeOneItem: (item: ItemOrder) => void;
	addOneItem: (item: ItemOrder) => void;
	removeItem: (item: ItemOrder) => void;
}

interface OrderContextProps {
	children: ReactNode;
}

const initialState: Order = {
	items: [],
	paymentMethod: null,
};

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderContextProps) {
	const [orderState, dispatch] = useReducer(
		orderReducer,
		{
			order: initialState,
		},
		(initialValue) => {
			return initialValue;
		},
	);

	const { order } = orderState;

	function addNewItem(item: ItemOrder) {
		const newItem: ItemOrder = {
			product: item.product,
			quantity: item.quantity,
		};

		dispatch(addNewItemAction(newItem));
	}

	function removeOneItem(item: ItemOrder) {
		dispatch(removeOneItemAction(item));
	}

	function addOneItem(item: ItemOrder) {
		dispatch(addOneItemAction(item));
	}

	function removeItem(item: ItemOrder) {
		dispatch(removeItemAction(item));
	}

	return (
		<OrderContext.Provider
			value={{ order, addNewItem, removeOneItem, addOneItem, removeItem }}>
			{children}
		</OrderContext.Provider>
	);
}
