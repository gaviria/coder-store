import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<>
			<nav className="h-20 flex justify-around items-center bg-indigo-600 text-white">
				<Link to="/">
					<div className="text-xl font-semibold">MASCOTAS STORE</div>
				</Link>
				<div className="flex gap-8 font-semibold">
					<Link
						className="underline decoration-transparent hover:underline transition duration-200 ease-in-out hover:decoration-white decoration-4 underline-offset-8"
						to="/"
					>
						Home
					</Link>
					<Link
						className="underline decoration-transparent hover:underline transition duration-200 ease-in-out hover:decoration-white decoration-4 underline-offset-8"
						to="/nosotros"
					>
						Nosotros
					</Link>
					<Link
						className="underline decoration-transparent hover:underline transition duration-200 ease-in-out hover:decoration-white decoration-4 underline-offset-8"
						to="/catalogue"
					>
						Productos
					</Link>
					<Link
						className="underline decoration-transparent hover:underline transition duration-200 ease-in-out hover:decoration-white decoration-4 underline-offset-8"
						to="/contactenos"
					>
						Contáctenos
					</Link>
				</div>
				<Link to="/cart">
					<CartWidget />
				</Link>
			</nav>
		</>
	);
};

export default NavBar;
