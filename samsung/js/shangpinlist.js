<script language="javascript">
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: true,
		autoplay: {
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	})
	mySwiper.el.onmouseover = function () {
		mySwiper.autoplay.stop();
	}
	mySwiper.el.onmouseout = function () {
		mySwiper.autoplay.start();
	}
</script>

<script type="text/javascript">
			var spanDom = document.getElementsByClassName("a");
			var goDom = document.getElementsByClassName("go");
			var divDom = document.getElementsByClassName("peiJianPic");
			window.onload = function(){
				var ord = 0;
				var cli = 0;
				var lastcli = 0;
				for(let i in spanDom){
					spanDom[i].onclick = function(){
							divDom[i].style.cssText = `
							z-index:10
						`
							divDom[ord].style.cssText = `
							z-index:1
						`
						ord = i;
					}
					goDom[i].onclick = function(){
						if(i = 0){
								cli++
							if(cli>2){
								cli = 0;
							}
							divDom[cli].style.cssText = `
								z-index:10
							`
							divDom[lastcli].style.cssText = `
								z-index:1
							`
							lastcli = cli;
						}else{
								cli--
							if(cli<0){
								cli = 2;
							}
							divDom[cli].style.cssText = `
								z-index:10
							`
							divDom[lastcli].style.cssText = `
								z-index:1
							`
							lastcli = cli;
						}
					}
				}
			}
		</script>
		
		
		<script type="text/javascript">
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
		</script>
		
		
		
		
		<script type="text/javascript">
			var adom = document.getElementsByClassName("rightNava");
			var spdom = document.getElementsByClassName("icon")
			for(let i in adom){
				adom[i].onmousemove = function(){
					this.style.color = "#1428A0";
					if(i==1){
						spdom[1].style.cssText = `
							background-position:  -46px -25px;
						`
					}
					if(i==2){
						spdom[2].style.cssText = `
							background-position:  -73px -25px;
						`
					}
					if(i==3){
						spdom[3].style.cssText = `
							background-position:  -98px -25px;
						`
					}
					if(i==4){
						spdom[4].style.cssText = `
							background-position:  -128px -25px;
						`
					}
				}
				adom[i].onmouseout = function(){
					this.style.color = "black";
					if(i==1){
						spdom[i].style.cssText = `
							background-position:  -46px 1px;
						`
					}
					if(i==2){
						spdom[2].style.cssText = `
							background-position:  -73px 1px;
						`
					}
					if(i==3){
						spdom[3].style.cssText = `
							background-position:  -98px 1px;
						`
					}
					if(i==4){
						spdom[4].style.cssText = `
							background-position:  -128px 1px;
						`
					}
				}
			}
		</script>