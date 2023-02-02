export interface Coffee {
	id?: string;
	tags: string[];
	name: string;
	description: string;
	price: number;
	image: {
		url: string;
	};
}
