


var arr = $("#boxUp").children;
for(let i=0;i<arr.length;i++){
	arr[i].onclick = function(){
		for(let i=0;i<arr.length;i++){
			arr[i].style.color = "#a0a0a0";
			arr[i].style.backgroundSize = `0% 3px`
		}
		arr[i].style.color = "#000000"
		arr[i].style.backgroundSize = `100% 3px`
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