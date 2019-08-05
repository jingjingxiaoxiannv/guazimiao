
	var em = $("#em");
	var tel = $("#tel");
	var cot1 = $("#cot1")
	var cot2 = $("#cot2")
	function huan(x,y,cot1,cot2){
		x.style.color = "#1428A0";
		x.style.borderBottom = `2px solid #1428A0`
		y.style.cssText = `
			Color:#767676;
			border:none;
		`
		cot1.style.display = "block";
		cot2.style.display = "none";
	}
	em.onclick = function(){
		huan(em,tel,cot1,cot2)
	}
	tel.onclick = function(){
		huan(tel,em,cot2,cot1)
	}

var inps = $(".inp");
for(let i in inps){
	inps[i].onfocus = function(){
		this.style.borderBottom = `2px solid #1428A0`
		this.previousElementSibling.style.cssText =`
		top:0;
		font-size:12px;
		color:#1428A0;
		`
	}
	inps[i].onblur = function(){
		if(inps[i].value==""){
			this.style.borderBottom = `1px solid #bbbbbb`
			this.previousElementSibling.style.cssText =`
			top:30px;
			font-size:16px;
			color:#bbbbbb;
			`
		}
	}
}








function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
}