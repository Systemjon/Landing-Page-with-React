import React from "react";


//create your first component
export const Card = ({title, imageSource}) => {
	return (
		<div className="card text-center p-4">
			<img src={imageSource}  p-2 alt=""/>
			<div className="card.body">
				<h4 className="card-title">{title}</h4>
				<p className="cart-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium earum nemo maiores adipisci esse, modi harum nulla beatae iure?!</p>
				<a href="#!" className="btn btn-primary">
					Find Our More!
				</a>
			</div>
		</div>
  	);	
			
};




export default Card;