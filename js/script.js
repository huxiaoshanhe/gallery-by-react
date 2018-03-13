var imageDatas = [
			{
				"filename":"images/1.jpg",
				"title":"闭月羞花",
				"desc":"去年今日此门中，人面桃花相映红，人面不知何处去，桃花依旧笑春风。"
			},
			{
				"filename":"images/2.jpg",
				"title":"沉鱼落雁",
				"desc":"群山万壑赴荆门，生长明妃尚有村，一去紫台连朔漠，独留青冢向黄昏。画图省识春风面，环佩空归夜月魂，千载琵琶作胡语，分明怨恨曲中论。"
			},
			{
				"filename":"images/3.jpg",
				"title":"环肥燕瘦",
				"desc":"一枝红艳露凝香，云雨巫山枉断肠，借问汉宫谁得似，可怜飞燕舞红妆。"
			},
			{
				"filename":"images/4.jpg",
				"title":"肩若削成",
				"desc":"名花倾城两相欢，长得君王带笑看，解释春风无限恨，沉香亭北倚阑干。"
			},
			{
				"filename":"images/5.jpg",
				"title":"腰如约素",
				"desc":"云想衣裳花想容，春风拂槛露华浓，若非群玉山头见，会向瑶台月下逢。"
			},
			{
				"filename":"images/6.jpg",
				"title":"齿如含贝",
				"desc":"小山重叠金明灭，鬓云欲度香腮雪，懒起画蛾眉，弄妆梳洗迟。照花前后镜，花面交相映，新帖绣罗襦，双双金鹧鸪。"
			},
			{
				"filename":"images/7.jpg",
				"title":"云髻峨峨",
				"desc":"燕子来时新社，梨花落后清明。池上碧苔三四点，叶底黄鹂一两声，日长飞絮轻。巧笑东邻女伴，采桑径里逢迎。疑怪昨宵春梦好，元是今朝斗草赢，笑从双脸生。"
			},
			{
				"filename":"images/8.jpg",
				"title":"修眉联娟",
				"desc":"梦后楼台高锁，酒醒帘幕低垂。去年春恨却来时。落花人独立，微雨燕双飞。记得小苹初见，两重心字罗衣。琵琶弦上说相思。当时明月在，曾照彩云归。"
			},
			{
				"filename":"images/9.jpg",
				"title":"丹唇外朗",
				"desc":"红酥手。黄滕酒。满城春色宫墙柳。东风恶。欢情薄。一怀愁绪，几年离索。错错错。春如旧。人空瘦。泪痕红浥鲛绡透。桃花落。闲池阁。山盟虽在，锦书难托。莫莫莫。"
			},
			{
				"filename":"images/10.jpg",
				"title":"皓齿内鲜",
				"desc":"世情薄，人情恶，雨送黄昏花易落。晓风干，泪痕残。欲笺心事，独语斜阑。难，难，难！人成各，今非昨，病魂常似秋千索。角声寒，夜阑珊。怕人寻问，咽泪装欢。瞒，瞒，瞒！"
			},
			{
				"filename":"images/11.jpg",
				"title":"明眸善睐",
				"desc":"秋风清，秋月明，落叶聚还散，寒鸦栖复惊。相思相见知何日？此时此夜难为情！入我相思门，知我相思苦，长相思兮长相忆，短相思兮无穷极，早知如此绊人心，何如当初莫相识。"
			},
			{
				"filename":"images/12.jpg",
				"title":"靥辅承权",
				"desc":"翩若惊鸿，婉若游龙。荣曜秋菊，华茂春松。仿佛兮若轻云之蔽月，飘摇兮若流风之回雪。远而望之，皎若太阳升朝霞；迫而察之，灼若芙蕖出渌波。"
			},
			{
				"filename":"images/13.jpg",
				"title":"瑰姿艳逸",
				"desc":"竦轻躯以鹤立，若将飞而未翔。践椒涂之郁烈，步蘅薄而流芳。超长吟以永慕兮，声哀厉而弥长。"
			},
			{
				"filename":"images/14.jpg",
				"title":"仪静体闲",
				"desc":"体迅飞凫，飘忽若神，凌波微步，罗袜生尘。动无常则，若危若安。进止难期，若往若还。转眄流精，光润玉颜。含辞未吐，气若幽兰。华容婀娜，令我忘餐。"
			},
			{
				"filename":"images/15.jpg",
				"title":"柔情绰态",
				"desc":"徙倚彷徨，神光离合，乍阴乍阳。竦轻躯以鹤立，若将飞而未翔。践椒涂之郁烈，步蘅薄而流芳。"
			},
			{
				"filename":"images/16.jpg",
				"title":"媚于语言",
				"desc":"奇服旷世，骨像应图。披罗衣之璀粲兮，珥瑶碧之华琚。戴金翠之首饰，缀明珠以耀躯。践远游之文履，曳雾绡之轻裾。微幽兰之芳蔼兮，步踟蹰于山隅。"
			}
		];
		
		/**
		 *获取区间里的随机值
		 */
		function getRangeRandom(low,high) {
			return Math.ceil(Math.random()*(high-low) + low);
		}
		
		/**
		 *获取0-30之间的任意一个正负值
		 */
		function get30DegRandom() {
			return ((Math.random()>0.5 ? '':'-')+Math.ceil(Math.random()*30));
		}

		var ImgFigure = React.createClass({
			/**
			 *imgFigure的点击处理函数
			 */
			handleClick:function(e) {
				if(this.props.arrange.isCenter) {
					this.props.inverse();
				} else {
					this.props.center();
				}
				
				e.stopPropagation();
				e.preventDefault();
			},
			render:function() {
				var styleObj = {};

				//如果props属性中指定了这张图片的位置，则使用
				if(this.props.arrange.pos) {
					styleObj = this.props.arrange.pos;
				}

				//如果图片的旋转角度有值且不为0，添加旋转角度
				if(this.props.arrange.rotate) {
					(['MozTransform','WebkitTransform','MsTransform','transform']).forEach(function(value) {
						styleObj[value] = 'rotate('+this.props.arrange.rotate+'deg)';
					}.bind(this));					
				}

				if(this.props.arrange.isCenter) {
					styleObj.zIndex = 11;
				}

				var imgFigureClassName = 'img-figure';
					imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse':'';
				return (
					<figure className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
						<div className="imgArea"><img src={this.props.data.filename} alt={this.props.data.title} /></div>
						<figcaption>
							<h2 className="img-title">{this.props.data.title}</h2>
							<div className="img-back" onClick={this.handleClick}>
								<p>{this.props.data.desc}</p>
							</div>
						</figcaption>	
					</figure>
				);
			}
		});
		
		//控制组件
		var ControllerUnit = React.createClass({
			handleClick:function(e){
				//如果点击的是当前选中状态的按钮，则翻转图片，否则居中
				if(this.props.arrange.isCenter) {
					this.props.inverse();
				} else {
					this.props.center();
				}
				e.preventDefault();
				e.stopPropagation();
			},
			render:function() {
				var controllerUnitClassName = 'controller-unit';

				//如果对应的是居中的图片，显示按钮的居中状态
				if(this.props.arrange.isCenter) {
					controllerUnitClassName += ' is-center';
					//如果对应的是翻转图片
					if(this.props.arrange.isInverse) {
						controllerUnitClassName += ' is-inverse';
					}
				}
				return (
					<span className={controllerUnitClassName} onClick={this.handleClick}></span>
				);
			}
		});

		var GalleryByReactApp = React.createClass({
			Constant:{
				centerPos:{
					left:0,
					right:0,
				},
				hPosRange:{//水平方向取值范围
					leftSecX:[0,0],
					rightSecX:[0,0],
					y:[0,0]
				},
				vPosRange:{
					x:[0,0],
					topY:[0,0]
				}
			},
			
			/**
			 *反转图片
			 *@param index 输入当前被执行inverse操作的图片对应的图片信息数组的index值
			 *return {Function} 这是一个闭包函数，其内return一个真正待被执行的函数
			 */
			 inverse:function(index) {
				return function() {
					var imgsArrangeArr = this.state.imgsArrangeArr;
					imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
					this.setState({
						imgsArrangeArr:imgsArrangeArr
					});
				}.bind(this);
			 },

			/**
			 *重新布局所有图片
			 *@param centerIndex 指定排布哪个图片
			 */
			rearrange:function(centerIndex) {
				var imgsArrangeArr = this.state.imgsArrangeArr,
				Constant = this.Constant,
				centerPos = Constant.centerPos,
				hPosRange = Constant.hPosRange,
				vPosRange = Constant.vPosRange,
				hPosRangeLeftSecX = hPosRange.leftSecX,
				hPosRangeRightSecX = hPosRange.rightSecX,
				hPosRangeY = hPosRange.y,
				vPosRangeTopY = vPosRange.topY,
				vPosRangeX = vPosRange.x,
				imgsArrangeTopArr = [],
				topImgNum = Math.ceil(Math.random()*2),//取一个或者不取
				topImgSpliceIndex = 0,
				imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1);
				
				//首先居中 centerIndex 的图片,居中的centerIndex的图片不需要旋转
				imgsArrangeCenterArr[0] = {
					pos : centerPos,
					rotate : 0,
					isCenter : true
				};

				//取出要布局上侧的图片的状态信息
				topImgSpliceIndex = Math.ceil(Math.random()*(imgsArrangeArr.length-topImgNum));
				imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);

				//布局上册的图片
				imgsArrangeTopArr.forEach(function(value,index) {
					imgsArrangeTopArr[index] = {
						pos : {
							top:getRangeRandom(vPosRangeTopY[0],vPosRangeTopY[1]),
							left:getRangeRandom(vPosRangeX[0],vPosRangeX[1])
						},
						rotate:get30DegRandom(),
						isCenter:false
					};					
				});

				//布局左右两侧的图片
				for(var i=0,j = imgsArrangeArr.length,k = j/2;i<j;i++) {
					var hPosRangeLORX = null;
					//前半部分布局左边，后半部分右边
					if(i<k) {
						hPosRangeLORX = hPosRangeLeftSecX;
					} else {
						hPosRangeLORX = hPosRangeRightSecX;
					}
					imgsArrangeArr[i] = {
						pos : {
							top:getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
							left:getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
						},
						rotate:get30DegRandom(),
						isCenter:false
					};
				}
				
				if(imgsArrangeTopArr && imgsArrangeTopArr[0]) {
					imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);
					imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0]);
				}

				this.setState({
					imgsArrangeArr : imgsArrangeArr
				});
			},

			/**
			 *利用rearrange函数居中对应Index的图片
			 *@param index 需要被居中的图片对应的图片信息数组的index值
			 *@return {Function}
			 */
			center:function(index) {
				return function() {
					this.rearrange(index);
				}.bind(this);
			},

			getInitialState:function() {
				return {
					imgsArrangeArr:[
						/*{
							pos:{
								left:'0',
								top:'0'
							},
							rotate:0,//旋转角度
							isInverse:false,//图片正反面
							isCenter:false//图片是否居中
						}*/
					]
				}
			},
			//组件加载后，为每张图片计算位置范围
			componentDidMount:function() {
				//首先拿到舞台的大小
				var stageDom = React.findDOMNode(this.refs.stage),
				stageW = stageDom.scrollWidth,
				stageH = stageDom.scrollHeight,
				halfStageW = Math.ceil(stageW/2),
				halfStageH = Math.ceil(stageH/2);
				
				//拿到一个imageFigure的大小
				var imgFigureDOM = React.findDOMNode(this.refs.imgFigure0),
				imgW = imgFigureDOM.scrollWidth,
				imgH = imgFigureDOM.scrollHeight,
				halfImgW = Math.ceil(imgW/2),
				halfImgH = Math.ceil(imgH/2);
				this.Constant.centerPos = {//计算中心图片的位置点
					left : halfStageW-halfImgW,
					top : halfStageH-halfImgH
				}
				//计算左侧、右侧区域排布位置的取值范围
				this.Constant.hPosRange.leftSecX[0] = -halfImgW;
				this.Constant.hPosRange.leftSecX[1] = halfStageW-halfImgW*3;
				this.Constant.hPosRange.rightSecX[0] = halfStageW+halfImgW;
				this.Constant.hPosRange.rightSecX[1] = stageW-halfImgW;
				this.Constant.hPosRange.y[0] = -halfImgH;
				this.Constant.hPosRange.y[1] = stageH-halfImgH;
				//计算上侧区域排布位置的取值范围
				this.Constant.vPosRange.topY[0] = -halfImgH;
				this.Constant.vPosRange.topY[1] = halfStageH-halfImgH*3;
				this.Constant.vPosRange.x[0] = halfStageW-imgW;
				this.Constant.vPosRange.x[1] = halfStageW;

				this.rearrange(13);
			},
			render:function() {
				var controllerUnits = [];
				imgFigures = [];
				imageDatas.forEach(function(value,index) {
					if(!this.state.imgsArrangeArr[index]) {
						this.state.imgsArrangeArr[index] = {
							pos:{
								left:0,
								top:0
							},
							rotate:0,
							isInverse:false,
							isCenter:false
						}
					}
					imgFigures.push(<ImgFigure data={value} ref={'imgFigure'+index} arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)} />);
					controllerUnits.push(<ControllerUnit arrange={this.state.imgsArrangeArr[index]} inverse={this.inverse(index)} center={this.center(index)} />);
				}.bind(this));
				return (
					<section className="stage" ref="stage">
						<section className="img-sec">
							{imgFigures}
						</section>
						<nav className="controller-nav">
							{controllerUnits}
						</nav>
					</section>
				);
			}
		});
		React.render(<GalleryByReactApp />,document.getElementById('content'));