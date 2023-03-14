import { itemListType } from "./ItemList";
export type CartContextType = {
	removeProductInCart: Function;
	removeProductsInCart: Function;
	totalPriceInCart: Function;
	addProductToCart: Function;
	totalProductsInCart: Function;
	cart: itemListType;
} | null;
