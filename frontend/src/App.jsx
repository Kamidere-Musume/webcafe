import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";



    // npx json-server --watch data/db.json --port 8000 
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<MenuPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
