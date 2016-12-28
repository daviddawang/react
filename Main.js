var React=require("react");
var ReactDOM=require("react-dom");

var Home=require("./js/Home");
var HomeHeader=require("./js/HomeHeader");
var MainFoot=require("./js/MainFoot");

var Main=React.createClass({
	
	render:function(){
		return (
			<div className="rootBox">
			    <header id="header"></header>
				<section id="content"></section>
				<footer id="footer"></footer>
			</div>
			
			
		)
	}
	
	
});

ReactDOM.render(<Main/>,document.getElementById("app"));
ReactDOM.render(<MainFoot/>,document.getElementById("footer"));
ReactDOM.render(<Home/>,document.getElementById("content"));
ReactDOM.render(<HomeHeader/>,document.getElementById("header"));
