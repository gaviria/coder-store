import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type props = {
	cantidadDisponible: number;
	onAdd: Function;
};

const ItemCount = ({ cantidadDisponible, onAdd }: props) => {
	const [pedidos, setPedidos] = useState(0);

	const handleClickSumar = (cantidadPedido: number) => {
		if (pedidos < cantidadDisponible) {
			setPedidos(cantidadPedido);
		}
	};

	const handleClickRestar = (cantidadPedido: number) => {
		if (pedidos > 0) {
			setPedidos(cantidadPedido);
		}
	};

	return (
		<div className="flex flex-row gap-6">
			<div className="flex items-center justify-between w-40 h-10 border-2 border-solid rounded border-indigo-600">
				<button
					className="ml-2"
					onClick={() => handleClickRestar(pedidos - 1)}
				>
					<MinusIcon className="h-5 w-5 stroke-indigo-600 hover:stroke-indigo-300" />
				</button>
				<div className="font-semibold text-lg text-zinc-600">
					{pedidos}
				</div>
				<button
					className="mr-2"
					onClick={() => handleClickSumar(pedidos + 1)}
				>
					<PlusIcon className="h-5 w-5 stroke-indigo-600 hover:stroke-indigo-300" />
				</button>
			</div>

			<button
				className="w-40 h-10 border-solid border-2 border-indigo-600 rounded hover:text-indigo-600 hover:bg-white font-semibold text-white bg-indigo-600"
				onClick={() => onAdd(pedidos)}
				disabled={cantidadDisponible === 0 || pedidos === 0}
			>
				Agregar al Carrito
			</button>
		</div>
	);
};

export default ItemCount;
