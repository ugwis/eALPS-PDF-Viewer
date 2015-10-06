var doc = document;
console.log("load");
$(function(){
	var src = $('#resourceobject').attr("data");
	location.href = src;
});