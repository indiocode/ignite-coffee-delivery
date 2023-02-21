/* eslint-disable no-unused-vars */
import type { Address } from '~/models/Address';
import type { ItemOrder, PaymentMethod } from '~/models/Order';

import type { Action } from './reducer';

export enum ActionTypes {
	ADD_NEW_ITEM = 'ADD_NEW_ITEM',
	ADD_ONE_ITEM = 'ADD_ONE_ITEM',
	REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
	ADD_ADDRESS_DELIVERED = 'ADD_ADDRESS_DELIVERED',
	ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD',
	FINESHEED_ORDER = 'FINESHEED_ORDER',
}

export function addNewItemAction(orderItem: ItemOrder): Action {
	return {
		type: ActionTypes.ADD_NEW_ITEM,
		payload: orderItem,
	};
}

export function removeOneItemAction(orderItem: ItemOrder): Action {
	return {
		type: ActionTypes.REMOVE_ONE_ITEM,
		payload: orderItem,
	};
}

export function addOneItemAction(orderItem: ItemOrder): Action {
	return {
		type: ActionTypes.ADD_ONE_ITEM,
		payload: orderItem,
	};
}

export function removeItemAction(orderItem: ItemOrder): Action {
	return {
		type: ActionTypes.REMOVE_ITEM,
		payload: orderItem,
	};
}

export function addAddressDeliveredAction(address: Address): Action {
	return {
		type: ActionTypes.ADD_ADDRESS_DELIVERED,
		payload: address,
	};
}

export function addPaymentMethodAction(paymentMethod: PaymentMethod): Action {
	return {
		type: ActionTypes.ADD_PAYMENT_METHOD,
		payload: paymentMethod,
	};
}

export function fineshedOrderAction(): Action {
	return {
		type: ActionTypes.FINESHEED_ORDER,
		payload: null,
	};
}
