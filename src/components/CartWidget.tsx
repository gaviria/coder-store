import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartWidget = () => {
	return (
		<div className="relative">
			<ShoppingCartIcon className="h-6 w-6 hover:stroke-cyan-500" />
			<div className="flex justify-center absolute left-5 bottom-3 items-center h-5 w-5 rounded-full bg-rose-700 text-center">
				<span className="text-xs font-semibold">5</span>
				<span className="animate-ping absolute h-full w-full rounded-full bg-cyan-300 opacity-25"></span>
			</div>
		</div>
	);
};

export default CartWidget;
