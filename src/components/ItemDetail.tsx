import { itemType } from "../types/ItemList";
import ItemCount from "./ItemCount";

type Props = {
	item: itemType;
	onAdd: Function;
	loading?: boolean;
};

const ItemDetail = ({ item, onAdd, loading }: Props) => {
	return loading ? (
		<div className="text-center text-indigo-600">LOADING...</div>
	) : (
		<div className="w-3/4 h-96 flex items-center justify-center gap-4">
			<img src={item.pictureUrl} alt="Item" />
			<div className="flex flex-col gap-2">
				<div className="text-3xl font-bold font-itemFont text-indigo-600">
					{item.title}
				</div>
				<div className="text-lg font-semibold font-itemFont text-indigo-600">
					Disponibles:{" "}
					<span className="text-lg font-itemFont text-rose-600">
						{item.stock}
					</span>
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
