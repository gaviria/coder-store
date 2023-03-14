import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
	const cart = useContext(CartContext);
	return (
		<div className="relative">
			<ShoppingCartIcon className="h-6 w-6 hover:stroke-cyan-500" />
			{cart.totalProductsInCart() > 0 && (
				<div className="flex justify-center absolute left-5 bottom-3 items-center h-5 w-5 rounded-full bg-rose-700 text-center">
					<span className="text-xs font-semibold">
						{cart.totalProductsInCart()}
					</span>
					<span className="animate-ping absolute h-full w-full rounded-full bg-cyan-300 opacity-25"></span>
				</div>
			)}
		</div>
	);
};

export default CartWidget;
