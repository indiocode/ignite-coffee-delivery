/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { Order, ItemOrder, PaymentMethod } from '~/models/Order';
import { orderReducer } from '~/reducers/order/reducer';
import {
	addAddressDeliveredAction,
	addNewItemAction,
	addOneItemAction,
	addPaymentMethodAction,
	fineshedOrderAction,
	removeItemAction,
	removeOneItemAction,
} from '~/reducers/order/action';
import { Address } from '~/models/Address';

interface OrderContextType {
	order: Order;
	addNewItem: (item: ItemOrder) => void;
	removeOneItem: (item: ItemOrder) => void;
	addOneItem: (item: ItemOrder) => void;
	removeItem: (item: ItemOrder) => void;
	addAddressDelivered: (address: Address) => void;
	addPaymentMethod: (paymentMethod: PaymentMethod) => void;
	finishedOrder: () => void;
}

interface OrderContextProps {
	children: ReactNode;
}

export const INITIAL_STATE: Order = {
	items: [],
	paymentMethod: null,
	address: null,
};

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderContextProps) {
	const [orderState, dispatch] = useReducer(
		orderReducer,
		{
			order: INITIAL_STATE,
		},
		(initialValue) => {
			const storedStateAsJSON = localStorage.getItem(
				'@IGNITE_COFFEE:ORDER_STATE:1.0.0',
			);

			if (!storedStateAsJSON) return initialValue;

			return JSON.parse(storedStateAsJSON);
		},
	);

	const { order } = orderState;

	useEffect(() => {
		const stateJSON = JSON.stringify(orderState);
		localStorage.setItem('@IGNITE_COFFEE:ORDER_STATE:1.0.0', stateJSON);
	}, [orderState]);

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

	function addAddressDelivered(address: Address) {
		dispatch(addAddressDeliveredAction(address));
	}

	function addPaymentMethod(paymentMethod: PaymentMethod) {
		dispatch(addPaymentMethodAction(paymentMethod));
	}

	function finishedOrder() {
		dispatch(fineshedOrderAction());
	}

	return (
		<OrderContext.Provider
			value={{
				order,
				addNewItem,
				removeOneItem,
				addOneItem,
				removeItem,
				addAddressDelivered,
				addPaymentMethod,
				finishedOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}
