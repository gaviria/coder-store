import "./App.css";
import { Route, Routes } from "react-router";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Contactenos from "./components/Contactenos";
import Nosotros from "./components/Nosotros";
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<div>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={
							<ItemListContainer greeting="Bienvenido a Mascotas Store" />
						}
					/>
					<Route path="/nosotros" element={<Nosotros />} />
					<Route
						path="/catalogue"
						element={
							<ItemListContainer greeting="Bienvenido a Mascotas Store" />
						}
					/>
					<Route
						path="/category/:id"
						element={
							<ItemListContainer greeting="Bienvenido a Mascotas Store" />
						}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/contactenos" element={<Contactenos />} />
				</Routes>
			</CartProvider>
		</div>
	);
}

export default App;
