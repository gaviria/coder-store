import { createContext, useState } from "react";
import { CartContextType } from "../types/ContextType";
import { itemType } from "../types/ItemList";

const CartContext = createContext<CartContextType>(null);

type props = {
	children: JSX.Element | JSX.Element[];
};

const CartProvider = ({ children }: props) => {
	const [cart, setCart] = useState([]);

	const addProductToCart = (product: itemType, quantity: number) => {
		if (isCartProduct(product.id)) {
			setCart(
				cart.map((item: itemType) => {
					return product.id === item.id
						? { ...item, units: item.units + quantity }
						: item;
				})
			);
		} else {
			setCart([...cart, { ...product, units: quantity }]);
		}
	};

	const totalPriceInCart = () =>
		cart.reduce(
			(previous, product) => previous + product.units * product.price,
			0
		);

	const totalProductsInCart = () =>
		cart.reduce((previous, product) => previous + product.units, 0);

	const isCartProduct = (id: number) => {
		return cart.find((cartItem: itemType) =>
			cartItem.id === id ? true : false
		);
	};

	const removeProductInCart = (id: number) => {
		setCart(cart.filter((item: itemType) => item.id !== id));
	};
	const removeProductsInCart = () => setCart([]);

	return (
		<CartContext.Provider
			value={{
				cart,
				removeProductInCart,
				removeProductsInCart,
				addProductToCart,
				totalPriceInCart,
				totalProductsInCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
