import React from "react";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import Jumb from "./Jumb.jsx";
import Navbar from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumb />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
