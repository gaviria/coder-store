import React from "react";
import { itemType } from "../types/ItemList";

type Props = {
	item: itemType;
};

const Item = ({ item }: Props) => {
	console.log("🚀 ~ file: Item.tsx:9 ~ Item ~ item", item);
	return (
		<div className="w-72 py-2 flex flex-col gap-3 items-center justify-center hover:border border-indigo-300 rounded-xl">
			<div>
				<img src={item.pictureUrl} alt="Comida Perros" />
			</div>
			<div className="text-xl font-itemFont text-indigo-600">
				{item.title}
			</div>
			<div className="text-xl font-itemFont text-rose-600">
				${item.price}
			</div>
			<button className="w-52 h-10 border-solid border-2 border-indigo-600 rounded text-indigo-600 font-semibold hover:text-white hover:bg-indigo-600">
				Ver Detalles
			</button>
		</div>
	);
};

export default Item;
