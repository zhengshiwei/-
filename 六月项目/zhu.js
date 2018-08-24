			$(".title").click(function(){
				$(this).next(".yc").slideDown(500);
			});
			$(".title").dblclick(function(){
				$(this).next(".yc").slideUp(500);
			});
			$('.nav_ul').zlightMenu();
			$(function(){
				var autoNum=0;
			var timer=setInterval(actionFn,2000);
			function actionFn(){
				if ($("#img_box li").eq(autoNum).is(":animated")) {
					return
				};
				autoNum++;
				autoNum%=5;
				$("#img_box li").eq(autoNum).fadeIn(666).siblings().fadeOut(666);
				color();
			};
			$("#right_btn").on("click",actionFn);
			$("#left_btn").on("click",function(){
				autoNum-=2;
				actionFn()
			})
			function color(){
				$("#dian_box li").eq(autoNum).addClass("dian_select").siblings().removeClass("dian_select");
			};
			$("#dian_box li").on("click",function(){
				autoNum=$(this).index()-1;
				actionFn()
				console.log(autoNum)
			})
			$("#img_box").on("mouseenter",function(){
				clearInterval(timer)
			});
			$("#img_box").on("mouseleave",function(){
				timer=setInterval(actionFn,2000)
				});
			})
			//数字化动画
			$(function(){
				$("#pro").on("mouseenter",function(){
					$(".prodct_icon").animate({
						"top":"-10px"
					},500).animate({
						"top":"60px"
					},100)
				});
				$("#pro").on("mouseenter",function(){
					$(".hovers").fadeIn().animate({
						"top":"-10px"
					},1000).animate({
						"top":"60px"
					},500).fadeIn()
				});
				$("#pro").on("mouseleave",function(){
					$(".hovers").fadeOut(1000)
				});
				$("#pro").on("mouseenter",function(){
					$(".defaut").fadeOut(1000)
				});
				$("#pro").on("mouseleave",function(){
					$(".defaut").fadeIn(2000)
				});
			})

			$(function(){
				$("#pro1").on("mouseenter",function(){
					$(".prodct_icon1").animate({
						"top":"-10px"
					},500).animate({
						"top":"60px"
					},100)
				});
				$("#pro1").on("mouseenter",function(){
					$(".hovers1").fadeIn().animate({
						"top":"-10px"
					},1000).animate({
						"top":"60px"
					},500).fadeIn()
				});
				$("#pro1").on("mouseleave",function(){
					$(".hovers1").fadeOut(1000)
				});
				$("#pro1").on("mouseenter",function(){
					$(".defaut1").fadeOut(1000)
				});
				$("#pro1").on("mouseleave",function(){
					$(".defaut1").fadeIn(2000)
				});
			})
			$(function(){
					$(".loves li").each(function(){
					$(this).on("mouseenter",function(){
						$(this).find(".qi").stop(true).animate({
							"marginTop":"20px"
						},500).animate({
							"marginTop":"-10px"
						},200)
					})
					
				});
					$(".loves li").each(function(){
						$(this).on("mouseenter",function(){
							$(this).find(".meng").fadeOut(1000);
						})
						$(this).on("mouseleave",function(){
							$(this).find(".meng").fadeIn(1000);
						})
						$(this).on("mouseenter",function(){
							$(this).find(".jiu").fadeIn(100).animate({
								"marginTop":"10px"
							},500).animate({
								"marginTop":"-10px"
							},500)
						})
						$(this).on("mouseleave",function(){
							$(this).find(".jiu").fadeOut(1000);
						})
					})
				});
			// tab 
			$(function(){
				$(".tabtitle li").click(function(){
					$(this).addClass("li_first").siblings().removeClass("li_first");
					var index=$(this).index();
					number=index;
					$(".tabcontent .shoufeng").hide();
					$(".tabcontent .shoufeng:eq("+index+")").show()
				});
				var auto=1;
				if (auto==1) {
					var number=0;
					var maxnumber=$(".tabtitle li").length;
					function autotab(){
						number++;
						number==maxnumber? number=0:number;
						$(".tabtitle li:eq("+number+")").addClass("li_first").siblings().removeClass("li_first");
						$(".tabcontent .shoufeng:eq("+number+")").show().siblings().hide()
					}
					var tabChange = setInterval(autotab,3000);
					$(".tabtitle li").click(function(){
						clearInterval(tabChange);
					})
				}
			})
			// li点击切换背景图
			$(function(){
				$(".tabtitle li").click(function(){
					$(this).addClass("li_first").siblings().removeClass("li_first");
					if ($(this).index()==0) {
					$(".zfu").css({
						"background":"url(imgs/25.jpg) no-repeat"
					})
					};
					if ($(this).index()==1) {
					$(".zfu").css({
						"background":"url(imgs/26.jpg) no-repeat"
					})
					};
					if ($(this).index()==2) {
					$(".zfu").css({
						"background":"url(imgs/27.jpg) no-repeat"
					})
					};
					if ($(this).index()==3) {
					$(".zfu").css({
						"background":"url(imgs/28.jpg) no-repeat"
					})
					};
					if ($(this).index()==4) {
					$(".zfu").css({
						"background":"url(imgs/29.jpg) no-repeat"
					})
					};
				})

			})	
			//手风琴
			$(function(){
				$(".shoufeng li").on("mouseenter",function(){
					$(this).stop(true).animate({
						"width":455
					},666).siblings().stop(true).animate({
						"width":204
					},666)
					$(this).find("h4").fadeOut();
					$(this).find("p").fadeIn(600);
					$(this).find("a").fadeIn(600);
				})
				$(".shoufeng li").on("mouseleave",function(){
					$(".shoufeng li").animate({
						"width":255
					},666)
					$(this).find("h4").fadeIn();
					$(this).find("p").fadeOut(500);
					$(this).find("a").fadeOut(500);
				})
			})