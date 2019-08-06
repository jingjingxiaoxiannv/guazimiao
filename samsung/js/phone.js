window.onscroll = function(){
var top1 = document.body.scrollTop||document.documentElement.scrollTop
	var divDom = document.getElementById("header")
	if(top1>=38){
		divDom.style.cssText = `
			position:fixed;
			top:0;
			z-index:9999999;
		`
	}else{
		divDom.style.cssText = "";
	}
}


//多倍镜的放大效果

//


class Magnifier{
	constructor(obj,boxDom) {
		this.boxDom = boxDom; //获取外层盒子
		this.bigBox = null; //放当前图片的的盒子
		this.smallBox = null;  // 放大镜盒子
		this.btnBox = null;   //放切换图片的小盒子
		this.imgsBox = null;  //有多张图片时存储其他图片

		//具有的默认属性
		let defaultObj = {
			imgs:["img/1.jpg"],
			width:200,  //放大镜的大小
			height:100,
			color:"pink",
			opacity:0.3,
			mulitple:3,
			// box-shadow: 0 0 3px 3px darkgray;
			showPosition:["top","right","bottom","left"]
		}

		//遍历数据

		for(let key in defaultObj) {
			if(obj[key]){
				this[key] = obj[key];
			}else {
				this[key] = defaultObj[key];
			}
		}

		this.render();
		this.addEvent();

	}
	//渲染页面
	render() {
		//创建当前存放图片的的盒子
		this.boxDom.style.position = "relative";
		this.bigBox = document.createElement('div');
		if(this.imgs.length == 1) {
			this.bigBox.style.cssText = `
				position:relative;
				float:left;
				width:${getStyle(this.boxDom,"width")};
				height:${getStyle(this.boxDom,"height")};			
				background-image:url(${this.imgs[0]});
				background-size:${getStyle(this.boxDom,"width")} ${getStyle(this.boxDom,"height")};
			`;	
		}else if(this.imgs.length > 1) {
			this.bigBox.style.cssText = `
				position:relative;
				float:left;
				width:${getStyle(this.boxDom,"width")};
				height:300px;			
				background-image:url(${this.imgs[0]});
				background-size:${getStyle(this.boxDom,"width")} 300px;
			`;
			//创建存放多张图片的盒子
			this.imgsBox = document.createElement("div");
			this.imgsBox.style.cssText = `
				position:absolute;
				bottom:0;
				width:${getStyle(this.boxDom,"width")};
				height:80px;
				display:flex;
				justify-content:space-around;
			`;
			this.boxDom.appendChild(this.imgsBox);

			for(let i=0;i<this.imgs.length;i++) {
				let img = document.createElement('img');
				img.style.cssText = `
					width:120px;
					height:80px;
				`;
				img.src = this.imgs[i];
				this.imgsBox.appendChild(img);
				img.onclick = ()=> {
					this.bigBox.style.backgroundImage = `url(${this.imgs[i]})`;
					this.btnBox.style.backgroundImage = `url(${this.imgs[i]})`;
				}
			}


		}
		this.boxDom.appendChild(this.bigBox);
		//创建放大镜盒子
		this.smallBox = document.createElement('div');
		this.smallBox.style.cssText = `
			position:absolute;
			width:${this.width}px;
			height:${this.height}px;
			background:${this.color};			
			opacity:${this.opacity};
			display:none;
		`;		
		this.bigBox.appendChild(this.smallBox);
		//创建放大效果的盒子
		this.btnBox = document.createElement('div');
		this.btnBox.style.cssText = `
			position:absolute;
			left:${this.bigBox.offsetWidth + 50}px;
			width:${this.width*this.mulitple}px;
			height:${this.height*this.mulitple}px;
			background-image:url(${this.imgs[0]} );
			background-size:${this.boxDom.offsetWidth*this.mulitple}px ${this.boxDom.offsetHeight*this.mulitple}px;
			background-position:0px 0px;
			display:none;
			z-index:99;
		`;
		if(this.showPosition == "bottom"){
			this.btnBox.style.left = "0px";
			this.btnBox.style.top = `${this.bigBox.offsetHeight + 120}px`;
		}
		this.bigBox.appendChild(this.btnBox);
	}

	addEvent() {
		this.boxDom.onmouseover = () => {
			this.smallBox.style.display = "block";
			this.btnBox.style.display = "block";
		}

		this.boxDom.onmouseout = () => {
			this.smallBox.style.display = "none";
			this.btnBox.style.display = "none";
		}

		this.boxDom.onmousemove = (event) => {
			let evt = event || window.event;
			let left1 = evt.pageX - this.boxDom.offsetLeft - this.smallBox.offsetWidth/2;
			let top1 = evt.pageY - this.boxDom.offsetTop - this.smallBox.offsetHeight/2;
			//判断左右边界
			if(left1 <= 0){				
				left1 = 0;
			}else if(left1 > this.boxDom.offsetWidth-this.smallBox.offsetWidth) {
				left1 = this.boxDom.offsetWidth-this.smallBox.offsetWidth;
			}
			//判断上下边界
			if(top1 <= 0){				
				top1 = 0;
			}else if (top1 >= this.bigBox.offsetHeight - this.smallBox.offsetHeight){
				top1 = this.bigBox.offsetHeight - this.smallBox.offsetHeight;
			}
			//赋值修改外观
			this.smallBox.style.marginLeft = left1 + 'px';				
			this.smallBox.style.marginTop = top1 + 'px';

			this.btnBox.style.backgroundPosition = `-${left1*this.mulitple}px -${top1*this.mulitple}px`; 
		}
	}
}



function getStyle(domObj,attr) {
	if(domObj.currentStyle){//IE
		return domObj.currentStyle[attr];
	}else{//其它主流浏览器
		var cssObj = window.getComputedStyle(domObj);
		return cssObj[attr];
	}
}



