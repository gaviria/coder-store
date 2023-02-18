import { itemType } from "../types/ItemList";
import ItemCount from "./ItemCount";

type Props = {
	item: itemType;
	onAdd: Function;
};

const ItemDetail = ({ item, onAdd }: Props) => {
	return (
		<div className="w-3/4 h-96 flex items-center justify-center gap-4">
			<img src={item.pictureUrl} alt="Item" />
			<div className="flex flex-col gap-2">
				<div className="text-3xl font-itemFont text-indigo-600">
					{item.title}
				</div>
				<div className="text-2xl font-itemFont text-rose-600">
					${item.price}
				</div>
				<div>{item.description}</div>
				<ItemCount cantidadDisponible={item.stock} onAdd={onAdd} />
			</div>
		</div>
	);
};

export default ItemDetail;
