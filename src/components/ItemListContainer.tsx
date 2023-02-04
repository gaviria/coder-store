import ItemCount from "./ItemCount";

type ItemListProps = {
	greeting: string;
};

const ItemListContainer = ({ greeting }: ItemListProps) => {
	const onAdd = (cantidadSolicitada: number) => {
		console.log("Se solicitaron: ", cantidadSolicitada);
	};

	return (
		<>
			<h2 className="mt-4 text-center text-lg font-bold text-indigo-600">
				{greeting}
			</h2>
			<ItemCount cantidadDisponible={8} onAdd={onAdd} />
		</>
	);
};

export default ItemListContainer;
