export type itemListType = {
	id: number;
	title: string;
	description: string;
	price: number;
	pictureUrl: string;
	stock: number;
	category: string;
	units?: number;
}[];

export type itemType = {
	id: number;
	title: string;
	description: string;
	price: number;
	pictureUrl: string;
	stock: number;
	category: string;
	units?: number;
};
