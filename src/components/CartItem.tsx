import React from "react";
import { itemType } from "../types/ItemList";

type Props = {
	item: itemType;
	removeProductInCart: Function;
};

const CartItem = ({ item, removeProductInCart }: Props) => {
	return (
		<div className="w-3/4 h-96 flex items-center justify-center gap-4">
			<img src={item.pictureUrl} alt="Item" />
			<div className="flex flex-col gap-2">
				<div className="text-3xl font-bold font-itemFont text-indigo-600">
					{item.title}
				</div>
				<div className="text-lg font-semibold font-itemFont text-indigo-600">
					Precio Unidad:{" "}
					<span className="text-lg font-itemFont text-rose-600">
						{item.price}
					</span>
				</div>
				<div className="text-lg font-semibold font-itemFont text-indigo-600">
					Cantidad:{" "}
					<span className="text-lg font-itemFont text-rose-600">
						{item.units}
					</span>
				</div>
				<div className="text-lg font-semibold font-itemFont text-indigo-600">
					Total:{" "}
					<span className="text-lg font-itemFont text-rose-600">
						{item.units * item.price}
					</span>
				</div>
				<div>{item.description}</div>
				<button
					className="w-40 h-10 border-solid border-2 border-rose-600 rounded hover:text-rose-600 hover:bg-white font-semibold text-white bg-rose-600"
					onClick={() => {
						removeProductInCart(item.id);
					}}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default CartItem;
