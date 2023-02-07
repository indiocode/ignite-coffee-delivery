export const Mask = {
	cpf: (value: string) => {
		return value
			.replace(/\D/g, '')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d)/, '$1.$2')
			.replace(/(\d{3})(\d{1,2})/, '$1-$2')
			.replace(/(-\d{2})\d+?$/, '$1');
	},
	number: (value: string) => {
		return value.replace(/\D/g, '');
	},
	cep: (value: string) => {
		return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2');
	},
	letter: (value: string) => {
		return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '');
	},
	uppercase: (value: string) => {
		return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '').toUpperCase();
	},
};
