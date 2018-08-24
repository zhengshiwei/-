// 账号 
 window.onload=function(){
 	function poi(id){
	return document.getElementById(id)
	}
	var login_number = poi('login_number');
		var y1 = poi('yz1');
		login_number.onkeyup = function () {
			var reg2 =/^[\u4E00-\u9FA5A-Za-z0-9]{3,6}$/;;
			var txt2 = login_number.value;
			if (reg2.test(txt2)) {
				y1.innerHTML = '账号正确';
			}else{
				y1.innerHTML = '请输入合法账号';
			}
		}	
	//密码
		var login_password = poi('login_password');
		var y2 = poi('yz2');
		login_password.onkeyup = function () {
			var reg2 =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;;
			var txt2 = login_password.value;
			if (reg2.test(txt2)) {
				y2.innerHTML = '密码正确';
			}else{
				y2.innerHTML = '密码错误';
			}
		}

		var regist_account = poi('regist_account');
		var y3 = poi('yz3');
		regist_account.onkeyup = function () {
			var reg2 =/^[\u4E00-\u9FA5A-Za-z0-9]{3,6}$/;;
			var txt2 = regist_account.value;
			if (reg2.test(txt2)) {
				y3.innerHTML = '账号正确';
			}else{
				y3.innerHTML = '请输入合法账号';
			}
		}
		var regist_password1 = poi('regist_password1');
		var y4 = poi('yz4');
		regist_password1.onkeyup = function () {
			var reg2 =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;;
			var txt2 = regist_password1.value;
			if (reg2.test(txt2)) {
				y4.innerHTML = '密码正确';
			}else{
				y4.innerHTML = '密码错误';
			}
		}	
		var regist_password2 = poi("regist_password2");
		regist_password2.onkeyup = function () {
			var y5 = poi('yz5');
			var regist_password1Value = poi('regist_password1').value;
			var regist_password2Value = poi('regist_password2').value;
			if (regist_password2Value !=regist_password1Value) {
				y5.innerHTML = "两次输入密码不正确";
			}else{
				y5.innerHTML = "密码一致";
			}
		}
		var regist_phone = poi('regist_phone');
		var y6 = poi('yz6');
		regist_phone.onkeyup = function () {
			var reg =/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
			var txt = regist_phone.value;
			if (reg.test(txt)) {
				y6.innerHTML = '手机号号码正确';
			}else{
				y6.innerHTML = '请输入正确的手机号码';
			}
		}
		poi('regist_btn').onclick = function () {
		var txts = poi('regist_account');
		var pwd = poi('regist_password1');
		if (txts.value == ''||pwd.value == '') {
			alert('用户名或密码不能为空');
		} else if (login_number.innerText=='') {
			setCookie('username',txts.value,3*24*60*60);
			setCookie('password',pwd.value,3*24*60*60);
			alert('注册成功');
		} else {
			alert('请重新输入');
		}
	}  

 } 
 
 	


