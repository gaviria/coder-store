import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { itemType, itemListType } from "../types/ItemList";
import Data from "./../../data.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [itemDetail, setItemDetail] = useState({
		id: 0,
		title: "",
		description: "",
		price: 0,
		pictureUrl: "",
		stock: 0,
		category: "",
	});

	useEffect(() => {
		setLoading(true);
		const getItem = new Promise((resolve, reject) => {
			const item: itemListType = Data.filter(
				(item: itemType) => item.id === parseInt(id!)
			);

			setTimeout(() => {
				if (item.length) {
					resolve(item[0]);
				} else {
					reject("No hay Datos");
				}
			}, 2000);
		});
		getItem
			.then((res) => {
				setItemDetail(res);
				setLoading(false);
			})
			.catch((reject) => reject);
	}, []);

	const onAdd = (cantidadSolicitada: number) => {
		console.log("Se solicitaron: ", cantidadSolicitada);
	};

	return (
		<div className="flex items-center justify-center">
			<ItemDetail item={itemDetail} onAdd={onAdd} loading={loading} />
		</div>
	);
};

export default ItemDetailContainer;
