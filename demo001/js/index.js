$(function() {

			let arrs = [];
			 

 				
				
				arrs=[100,300,"top1"]
				info(arrs);
				arrs=[60,340,"top2"]
				info(arrs);
				arrs=[20,380,"top3"]
				info(arrs);
				arrs=[60,340,"top4"]
				info(arrs);
				arrs=[100,300,"top5"]
				info(arrs);
				
				

				/*		//在正面
						if(zt) {
							//增加lefts达到右移动的效果
							lefts += 5;
							tops+=0.9;

							if(lefts >= 100 && lefts < 200) { //在100至200之间 字体变大
								fonts += 0.3;
								num += 0.05;
							} else if(lefts >= 200) { //200以后字体变小
								fonts -= 0.3;
								num -= 0.05;
								if(num < 0.3) { //设置字体最小为14
									num = 0.3;
								}
								if(fonts < 14) { //设置字体最小为14
									fonts = 14;
								}
							}
							
							//更改样式
							$(".top1").css({
								left: lefts + "px",
								fontSize: fonts + "px",
								opacity: num,
								top:tops+"px",
								zIndex:1
							});

							if(lefts >= 300) {
								zt = !zt;
							}

						}
						//在反面
						if(!zt) {
							//减少lefts达到左移动的效果
							lefts -= 5;
							tops -= 0.9;

							$(".top1").css({
								left: lefts + "px",
								opacity: "0.3",
								top:tops+"px",
								zIndex:0
							})
							if(lefts <= 100) {
								zt = !zt;
							}
						}
				*/
 
			function info(arr) {
				let fonts = 14; //字体大小
			let zt = true; //正反面（）
			let num = 0.3; //字体透明度
				console.log(arr)
				let chu=arr[0];
				setInterval(function(){
					
				
				//在正面
				if(zt) {
					//console.log("正"+arr[0])
					//增加lefts达到右移动的效果
					arr[0] += 5;
 
					if(arr[0] >=chu && arr[0] < (arr[1]/2)) { //在100至200之间 字体变大
						fonts += 0.3;
						num += 0.05;
					} else if(arr[0] >= (arr[1]/2)) { //200以后字体变小
						fonts -= 0.3;
						num -= 0.05;
						if(num < 0.3) { //设置字体最小为14
							num = 0.3;
						}
						if(fonts < 14) { //设置字体最小为14
							fonts = 14;
						}
					}

					//更改样式
					$("."+arr[2]).css({
						left: arr[0] + "px",
						fontSize: fonts + "px",
						opacity: num,
 						zIndex: 1
					});

					if(arr[0] >= arr[1]) {
						zt = !zt;
					}

				}
				//在反面
				if(!zt) {
					//console.log("反"+arr[0])
					//减少lefts达到左移动的效果
					arr[0] -= 5;
 
					$("."+arr[2]).css({
						left: arr[0] + "px",
						opacity: "0.3",
 						zIndex: 0
					})
					if(arr[0] <= chu) {
						zt = !zt;
					}

				}

				},50)
			}
})