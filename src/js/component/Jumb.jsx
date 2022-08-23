import React from "react";

//create your first component
export const Jumb = (props) => {
	return (	
        <div className="container p-3 color">
             <h1 className="display-4 ">A Warm Welcome</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium fugit voluptates recusandae iusto quisquam et earum consectetur ipsa, autem eum magni fuga cupiditate similique nostrum deleniti perspiciatis maiores neque explicabo..</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
	    );
};

export default Jumb;

