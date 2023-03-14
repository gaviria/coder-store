import ItemList from "./ItemList";
import { useEffect, useState } from "react";
//import Data from "./../../data.json";
import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { NavLink, useParams } from "react-router-dom";
import { itemListType, itemType } from "../types/ItemList";

type ItemListProps = {
	greeting: string;
};

const ItemListContainer = ({ greeting }: ItemListProps) => {
	const { id } = useParams();
	const [itemList, setItemList] = useState([]);
	const [loading, setLoading] = useState(false);
	const styleCategory = "font-semibold text-rose-600";
	const styleInactiveCategory = "font-semibold text-indigo-600";

	const queryProducts = (query) => {
		getDocs(query).then((collection) => {
			setItemList(
				collection.docs.map((product) => {
					return { id: parseInt(product.id), ...product.data() };
				})
			);
			setLoading(false);
		});
	};

	useEffect(() => {
		setLoading(true);
		//Con firebase
		const queryDb = getFirestore();
		const queryCollection = collection(queryDb, "products");
		if (id) {
			const queryFilterCategory = query(
				queryCollection,
				where("category", "==", id)
			);
			queryProducts(queryFilterCategory);
		} else {
			queryProducts(queryCollection);
		}

		// const getData = new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		if (Data.length) {
		// 			resolve(Data);
		// 		} else {
		// 			reject("No hay Datos");
		// 		}
		// 	}, 2000);
		// });
		// getData
		// 	.then((res) => {
		// 		setLoading(false);
		// 		setItemList(res);
		// 	})
		// 	.catch((reject) => reject);
	}, [id]);

	// let categoryFilter: itemListType = [];
	// if (id) {
	// 	categoryFilter = itemList.filter(
	// 		(item: itemType) => item.category === id
	// 	);
	// }

	return (
		<>
			<h2 className="mt-4 mb-12 text-center text-2xl font-bold text-indigo-600">
				{greeting}
			</h2>
			<div className="w-1/3 m-auto py-2 flex gap-4 items-center justify-center mb-10 border rounded-2xl border-indigo-600">
				<div className="mr-4 font-semibold text-indigo-600">
					Categorias:
				</div>
				<div className="flex gap-10">
					<NavLink
						to="/catalogue"
						className={({ isActive }) =>
							isActive ? styleCategory : styleInactiveCategory
						}
					>
						Todos
					</NavLink>
					<NavLink
						to="/category/normal"
						className={({ isActive }) =>
							isActive ? styleCategory : styleInactiveCategory
						}
					>
						Normal
					</NavLink>
					<NavLink
						to="/category/peso"
						className={({ isActive }) =>
							isActive ? styleCategory : styleInactiveCategory
						}
					>
						Peso
					</NavLink>
					<NavLink
						to="/category/piel"
						className={({ isActive }) =>
							isActive ? styleCategory : styleInactiveCategory
						}
					>
						Piel
					</NavLink>
				</div>
			</div>
			<ItemList
				// itemList={categoryFilter.length ? categoryFilter : itemList}
				itemList={itemList}
				loading={loading}
			/>
		</>
	);
};

export default ItemListContainer;
