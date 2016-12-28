
var React = require("react");
var ReactDOM=require("react-dom");

var ProList=React.createClass({
	getInitialState:function(){
		return {
			proList:""
		}
	},
	componentWillMount:function(){
		
		var that = this;
		$.ajax({
			method:"get",
			url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
			data:{
				
			},
			dataType:"JSONP",
			success:function(data){
				
				var result = data;
				var data = eval(result);
//				console.log(data);
				var len=data.length;
				var arr=[];
				
				for(var i=0;i<len;i++){
					arr.push( <li key={i} className="proItem" data-goodsID={data[i].goodsID}>
					<div className="proImg">
						<img src={data[i].goodsListImg} />
					</div>
					<div className="proInfo">
						<p>{data[i].goodsName}</p>
						<p><span>￥<b>{data[i].discount==0?data[i].price:data[i].price*data[i].discount/10}</b></span> <del>￥{data[i].price}</del></p>
						<p>{data[i].discount==0?"不打":data[i].discount}折</p>
						<span className="cartBtn"><i className="iconfont">&#xe602;</i></span>
					</div>
				</li>)
					
				}
				that.setState({
					proList:arr
				})
			}
		});
	},
	render:function(){
		return (
			
			<ul id="proList">
			    {this.state.proList}
			</ul>
			
		)
	},
	componentDidUpdate:function(){
		var that =this;
		$(".proItem").click(function(){
			console.log($(this).attr('data-goodsID'));
			var goodsID=$(this).attr('data-goodsID');
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"))
			ReactDOM.render(<Detail />,document.getElementById("content"))
			ReactDOM.unmountComponentAtNode(document.getElementById("header"))
			ReactDOM.render(<DetailHeader />,document.getElementById("header"))
			
			
		});
		$(".cartBtn").click(function(e){
			e.stopPropagation();
			
			
		});
		
	}
	
})
module.exports = ProList;