export const formatNumberToMoney = (value: number): string => {
	return value
		.toFixed(2)
		.replace('.', ',')
		.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
};
