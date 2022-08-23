import React from "react";
import Card from "./Card.jsx";

import imagen1 from '../assets/imagen01.jpg'
import imagen2 from '../assets/imagen02.jpg'
import imagen3 from '../assets/imagen03.jpg'
import imagen4 from '../assets/imagen04.jpg'


const cards = [
	{
		id: 1,
		title:"Card Title",
		image: imagen1
	},
	{
		id: 2,
		title:"Card Title",
		image: imagen2
	},
	{
		id: 3,
		title:"Card Title",
		image: imagen3
	},
	{
		id: 4,
		title:"Card Title",
		image: imagen4
	}
]

export const Cards = (props) => {
	return (
		<div className="container  p-2 d-flex justify-content-center align-items-center">
			<div className="row">
				{
					cards.map(card =>(
						<div className="col-md-3" key={card.id}>
						<Card title={card.title} imageSource={card.image} key={card.id}/>
				</div>
					))
				}
			</div>
		</div>
  	);	
			
};
export default Cards;