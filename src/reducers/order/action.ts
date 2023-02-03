/* eslint-disable no-unused-vars */
import { Address } from '~/models/Address';
import { ItemOrder } from '~/models/Order';

export enum ActionTypes {
	ADD_NEW_ITEM = 'ADD_NEW_ITEM',
	ADD_ONE_ITEM = 'ADD_ONE_ITEM',
	REMOVE_ONE_ITEM = 'REMOVE_ONE_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
	ADD_ADDRESS_DELIVERED = 'ADD_ADDRESS_DELIVERED',
}

export function addNewItemAction(orderItem: ItemOrder) {
	return {
		type: ActionTypes.ADD_NEW_ITEM,
		payload: orderItem,
	};
}

export function removeOneItemAction(orderItem: ItemOrder) {
	return {
		type: ActionTypes.REMOVE_ONE_ITEM,
		payload: orderItem,
	};
}

export function addOneItemAction(orderItem: ItemOrder) {
	return {
		type: ActionTypes.ADD_ONE_ITEM,
		payload: orderItem,
	};
}

export function removeItemAction(orderItem: ItemOrder) {
	return {
		type: ActionTypes.REMOVE_ITEM,
		payload: orderItem,
	};
}

export function addAddressDeliveredAction(address: Address) {
	return {
		type: ActionTypes.ADD_ADDRESS_DELIVERED,
		payload: address,
	};
}
