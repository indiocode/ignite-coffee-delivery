import { Address } from '~/models/Address';
import { Order, ItemOrder, PaymentMethod } from '~/models/Order';
import { ActionTypes } from './action';

interface OrderState {
	order: Order;
}

export interface Action {
	type: ActionTypes;
	payload: ItemOrder | Address | PaymentMethod;
}

export function orderReducer(state: OrderState, action: Action): OrderState {
	switch (action.type) {
		case ActionTypes.ADD_NEW_ITEM: {
			const { items } = state.order;
			const { product, quantity } = action.payload as ItemOrder;

			const existingIndex = items.findIndex(
				(item) => item.product.id === product.id,
			);

			if (existingIndex < 0)
				return {
					order: {
						...state.order,
						items: [...state.order.items, { product, quantity }],
					},
				};

			//change a existing item order from items
			return {
				order: {
					...state.order,
					items: items.map((item) =>
						item.product.id === product.id
							? {
									...item,
									quantity: item.quantity + quantity,
							  }
							: item,
					),
				},
			};
		}

		case ActionTypes.ADD_ONE_ITEM: {
			const { items } = state.order;
			const { product } = action.payload as ItemOrder;

			return {
				order: {
					...state.order,
					items: items.map((item) =>
						item.product.id === product.id
							? {
									...item,
									quantity: item.quantity + 1,
							  }
							: item,
					),
				},
			};
		}

		case ActionTypes.REMOVE_ONE_ITEM: {
			const { items } = state.order;
			const { product } = action.payload as ItemOrder;

			return {
				order: {
					...state.order,
					items: items.map((item) =>
						item.product.id === product.id
							? {
									...item,
									quantity: item.quantity - 1,
							  }
							: item,
					),
				},
			};
		}

		case ActionTypes.REMOVE_ITEM: {
			const { items } = state.order;
			const { product } = action.payload as ItemOrder;

			return {
				order: {
					...state.order,
					items: items.filter((item) => item.product.id !== product.id),
				},
			};
		}

		case ActionTypes.ADD_ADDRESS_DELIVERED: {
			return {
				order: {
					...state.order,
					address: action.payload as Address,
				},
			};
		}

		case ActionTypes.ADD_PAYMENT_METHOD: {
			return {
				order: {
					...state.order,
					paymentMethod: action.payload as PaymentMethod,
				},
			};
		}

		default:
			return state;
	}
}
