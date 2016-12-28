
var React = require("react");
var DetailHeader=React.createClass({
	render:function(){
		return (
			<ul >
				<li className="logo" id="back" onClick={this.backHandler}>
					<i className="iconfont">&#xe600;</i>
				</li>
				<li>
					产品详情
				</li>
				<li>
					
				</li>
			</ul>
			
			
		)
	}
})
module.exports = DetailHeader;