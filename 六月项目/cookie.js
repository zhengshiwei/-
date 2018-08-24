//cookie的增删改查
//设置cookie
function setCookie(key,value,time) {
	document.cookie = key + "=" + encodeURIComponent(value) + ';max-age=' + time;	
}

//删除cookie
function removeCookie(key) {
	setCookie(key,'0',-1);
}

//读取cookie
function getCookie(key) {
	var cookieArr = document.cookie.split('; ');
	for (var i = 0; i < cookieArr.length; i++) {
		var arr2 = cookieArr[i].split('=');
		if (arr2[0]==key) {
			return decodeURIComponent(arr2[1]);
		}
	}
	return '';
}
function poi(id) {
	return document.getElementById(id);
}