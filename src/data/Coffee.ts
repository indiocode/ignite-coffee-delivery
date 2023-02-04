import { v4 as uuidv4 } from 'uuid';
import {
	CoffeeImage1,
	CoffeeImage10,
	CoffeeImage11,
	CoffeeImage12,
	CoffeeImage13,
	CoffeeImage14,
	CoffeeImage2,
	CoffeeImage3,
	CoffeeImage4,
	CoffeeImage5,
	CoffeeImage6,
	CoffeeImage7,
	CoffeeImage8,
	CoffeeImage9,
} from '~/assets';
import { Coffee } from '~/models/Coffee';

export const coffeeList: Coffee[] = [
	{
		id: uuidv4(),
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		tags: ['Tradicional'],
		price: 9.9,
		image: {
			url: CoffeeImage1,
		},
	},
	{
		id: uuidv4(),
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		tags: ['Tradicional'],
		price: 9.9,
		image: {
			url: CoffeeImage2,
		},
	},
	{
		id: uuidv4(),
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		tags: ['Tradicional'],
		price: 9.9,
		image: {
			url: CoffeeImage3,
		},
	},

	{
		id: uuidv4(),
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		tags: ['Tradicional', 'Gelado'],
		price: 9.9,
		image: {
			url: CoffeeImage4,
		},
	},

	{
		id: uuidv4(),
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		tags: ['Tradicional', 'com leite'],
		price: 9.9,
		image: {
			url: CoffeeImage5,
		},
	},

	{
		id: uuidv4(),
		name: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		tags: ['Tradicional', 'com leite'],
		price: 9.9,
		image: {
			url: CoffeeImage6,
		},
	},

	{
		id: uuidv4(),
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		tags: ['Tradicional', 'com leite'],
		price: 9.9,
		image: {
			url: CoffeeImage7,
		},
	},

	{
		id: uuidv4(),
		name: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		tags: ['Tradicional', 'com leite'],
		price: 9.9,
		image: {
			url: CoffeeImage8,
		},
	},

	{
		id: uuidv4(),
		name: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		tags: ['Tradicional', 'com leite'],
		price: 9.9,
		image: {
			url: CoffeeImage9,
		},
	},

	{
		id: uuidv4(),
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		tags: ['Especial', 'com leite'],
		price: 9.9,
		image: {
			url: CoffeeImage10,
		},
	},

	{
		id: uuidv4(),
		name: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		tags: ['Especial', 'alcoólico', 'gelado'],
		price: 9.9,
		image: {
			url: CoffeeImage11,
		},
	},

	{
		id: uuidv4(),
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		tags: ['Especial'],
		price: 9.9,
		image: {
			url: CoffeeImage12,
		},
	},

	{
		id: uuidv4(),
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		tags: ['Especial'],
		price: 9.9,
		image: {
			url: CoffeeImage13,
		},
	},

	{
		id: uuidv4(),
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		tags: ['Especial', 'alcoólico'],
		price: 9.9,
		image: {
			url: CoffeeImage14,
		},
	},
];
