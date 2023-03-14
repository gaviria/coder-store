import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { itemType } from "../types/ItemList";
import CartItem from "./CartItem";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const Cart = () => {
	const cartContext = useContext(CartContext);
	const {
		cart,
		totalPriceInCart,
		removeProductInCart,
		removeProductsInCart,
		totalProductsInCart,
	} = cartContext;
	const [loading, setLoading] = useState(false);
	const [emailError, setEmailError] = useState(true);
	const [orderId, setOrderId] = useState(false);
	const [buyer, setBuyer] = useState({});
	const order = {
		buyer: buyer,
		items: cart,
		total: totalPriceInCart(),
	};

	const verifyEmail = (e) => {
		setEmailError(e.currentTarget.value != order.buyer.email);
	};

	const handleOnChangeForm = (e) => {
		setBuyer({
			...buyer,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const showForm = () => {
		return (
			<>
				<div className="mb-6 text-2xl font-bold font-itemFont text-indigo-600">
					{" "}
					Formulario de registro
				</div>
				<div className=" w-full max-w-sm">
					<div className="md:flex md:items-center mb-6">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="name"
						>
							Nombre:
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="name"
							type="text"
							onChange={handleOnChangeForm}
						/>
					</div>
					<div className="md:flex md:items-center mb-6">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="lastname"
						>
							Apellido:
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="lastname"
							type="text"
							onChange={handleOnChangeForm}
						/>
					</div>
					<div className="md:flex md:items-center mb-6">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="email"
						>
							Email:
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="email"
							type="email"
							onChange={handleOnChangeForm}
						/>
					</div>
					<div className="md:flex md:items-center mb-6">
						<label
							className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
							htmlFor="email2"
						>
							Verificar Email:{" "}
							{emailError ? "Email no valido" : ""}
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							name="email2"
							type="email2"
							onChange={(e) => verifyEmail(e)}
						/>
					</div>
				</div>
			</>
		);
	};

	const handlePayClick = () => {
		setLoading(true);
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
		setLoading(false);
	};

	const showProducts = () => {
		return (
			<>
				<div className="flex flex-col items-center justify-center">
					{cart.map((item: itemType) => (
						<CartItem
							key={item.id}
							item={item}
							removeProductInCart={removeProductInCart}
						/>
					))}
				</div>
				<div className="flex flex-col items-center mt-4">
					{orderId ? (
						<>
							<div className="mb-6 text-2xl font-bold font-itemFont text-indigo-600">
								{" "}
								Su número de orden es: {orderId}
							</div>
							<button
								className="w-40 h-10 mb-8 border-solid mt-4 border-2 border-indigo-600 rounded hover:text-indigo-600 hover:bg-white font-semibold text-white bg-indigo-600"
								onClick={() => removeProductsInCart()}
							>
								Vaciar Carrito
							</button>
						</>
					) : (
						<>
							{loading ? (
								<div>Loading...</div>
							) : (
								<>
									{showForm()}

									<div className="text-lg font-semibold font-itemFont text-indigo-600">
										Cantidad Total:{" "}
										<span className="text-lg font-itemFont text-rose-600">
											{totalProductsInCart()}
										</span>
									</div>
									<div className="text-lg font-semibold font-itemFont text-indigo-600">
										Total a Pagar:{" "}
										<span className="text-lg font-itemFont text-rose-600">
											{totalPriceInCart()}
										</span>
									</div>
									<button
										className="w-40 h-10 mb-8 border-solid mt-4 border-2 border-indigo-600 rounded hover:text-indigo-600 hover:bg-white font-semibold text-white bg-indigo-600"
										onClick={() => handlePayClick()}
										disabled={emailError}
									>
										Pagar
									</button>
								</>
							)}
						</>
					)}
				</div>
			</>
		);
	};

	return !cart.length ? (
		<div className="text-center mt-3">
			<p className="text-lg font-semibold font-itemFont text-indigo-600">
				No hay Elementos en el carrito de compras.
			</p>
		</div>
	) : (
		<div>{showProducts()}</div>
	);
};

export default Cart;
