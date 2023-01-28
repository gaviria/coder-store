import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<nav className="h-20 flex justify-around items-center bg-indigo-600 text-white">
			<div className="text-xl font-semibold">MASCOTAS STORE</div>
			<div className="flex gap-8 font-semibold">
				<a
					className="underline decoration-transparent hover:underline transition duration-200 ease-in-out hover:decoration-white decoration-4 underline-offset-8"
					href="#"
				>
					Home
				</a>
				<a
					className="underline decoration-transparent hover:underline transition duration-200 ease-in-out hover:decoration-white decoration-4 underline-offset-8"
					href="#"
				>
					Nosotros
				</a>
				<a
					className="underline decoration-transparent hover:underline transition duration-200 ease-in-out hover:decoration-white decoration-4 underline-offset-8"
					href="#"
				>
					Productos
				</a>
				<a
					className="underline decoration-transparent hover:underline transition duration-200 ease-in-out hover:decoration-white decoration-4 underline-offset-8"
					href="#"
				>
					Contáctenos
				</a>
			</div>
			<CartWidget />
		</nav>
	);
};

export default NavBar;
