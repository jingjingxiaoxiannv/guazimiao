// 导航粘性定位
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



