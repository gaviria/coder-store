import ItemList from "./ItemList";
import { useEffect, useState } from "react";

type ItemListProps = {
	greeting: string;
};

const data = [
	{
		id: 1,
		title: "Comida Perros 1",
		description: "description 1",
		price: 100,
		pictureUrl: "images/comidaitem1.jpg",
		stock: 5,
	},
	{
		id: 2,
		title: "Comida Perros 2",
		description: "description 2",
		price: 200,
		pictureUrl: "images/comidaitem2.jpg",
		stock: 5,
	},
	{
		id: 3,
		title: "Comida Perros 3",
		description: "description 3",
		price: 400,
		pictureUrl: "images/comidaitem3.jpg",
		stock: 5,
	},
	{
		id: 4,
		title: "Comida Perros 4",
		description: "description 4",
		price: 400,
		pictureUrl: "images/comidaitem4.jpg",
		stock: 5,
	},
];

const ItemListContainer = ({ greeting }: ItemListProps) => {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		const getData = new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data.length) {
					resolve(data);
				} else {
					reject("No hay Datos");
				}
			}, 2000);
		});
		getData.then((res) => setItemList(res)).catch((reject) => reject);
	}, []);

	return (
		<>
			<h2 className="mt-4 mb-12 text-center text-2xl font-bold text-indigo-600">
				{greeting}
			</h2>
			<ItemList itemList={itemList} />
		</>
	);
};

export default ItemListContainer;
