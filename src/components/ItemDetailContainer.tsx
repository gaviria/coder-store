import { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
//import { itemType, itemListType } from "../types/ItemList";
//import Data from "./../../data.json";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
	const cartContext = useContext(CartContext);
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
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
		const queryDb = getFirestore();
		const queryDoc = doc(queryDb, "products", `${id}`);
		getDoc(queryDoc).then((doc) => {
			if (doc.exists()) {
				setItemDetail({ id: parseInt(doc.id), ...doc.data() });
				setLoading(false);
			} else {
				setError(true);
			}
		});
		// const getItem = new Promise((resolve, reject) => {
		// 	const item: itemListType = Data.filter(
		// 		(item: itemType) => item.id === parseInt(id!)
		// 	);

		// 	setTimeout(() => {
		// 		if (item.length) {
		// 			resolve(item[0]);
		// 		} else {
		// 			reject("No hay Datos");
		// 		}
		// 	}, 2000);
		// });
		// getItem
		// 	.then((res) => {
		// 		setItemDetail(res);
		// 		setLoading(false);
		// 	})
		// 	.catch((reject) => reject);
	}, []);

	const onAdd = (cantidadSolicitada: number) => {
		cartContext?.addProductToCart(itemDetail, cantidadSolicitada);

		console.log(cartContext?.cart, cantidadSolicitada, "FINAL");
	};

	return !error ? (
		<div className="flex items-center justify-center">
			<ItemDetail item={itemDetail} onAdd={onAdd} loading={loading} />
		</div>
	) : (
		<div className="text-center text-indigo-600">El producto no existe</div>
	);
};

export default ItemDetailContainer;
