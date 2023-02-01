import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			<ItemListContainer greeting="Bienvenido a Mascotas Store" />
		</div>
	);
}

export default App;
