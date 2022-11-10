import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Card extends React.Component{
	render(){
		return(
			<div className="card">
				<div className="like">&lt;3</div>
				{this.props.smile}
				<h6>{this.props.text}</h6>
			</div>
		)
	}

}

const emotion = [
	{smile: "=)", description: "Cool"},
	{smile: "O_o", description: "Wow"},
	{smile: "^_^", description: "Mmmm..."},
	{smile: "=|_", description: "Beee"}
]

ReactDOM.render(
	<div className="wrapper">
		{/*v1*/}
		{/* <div className="card">=)</div>
		<div className="card">O_o</div>
		<div className="card">^_^</div>
		<div className="card">=|_</div> */}
		{/*v2*/}
		{/* <Card smile = "=)" text = "Cool"/>
		<Card smile ="O_o" text = "Wow"/>
		<Card smile ="^_^" text = "Mmmm..."/>
		<Card smile ="=|_" text = "Beee"/> */}
		{/*v3*/}

		{emotion.map((el, i) => <Card smile={el.smile} text={el.description} key = {i}/>)}
	</div>,
	document.querySelector("#root")
)
