import { itemType, itemListType } from "../types/ItemList";
import Item from "./Item";

type Props = {
	itemList: itemListType;
	loading?: boolean;
};

const ItemList = ({ itemList, loading }: Props) => {
	return loading ? (
		<div className="text-center text-indigo-600">LOADING...</div>
	) : (
		<div className="h-4/5 flex items-center justify-center gap-4 flex-wrap mb-12">
			{itemList.map((item: itemType) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
};

export default ItemList;
