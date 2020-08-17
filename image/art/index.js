$(document).ready(function(){
function textLeft(){
$("#innerUpText").animate({"marginTop":"0px"},1000,"swing",
	function(){
	$(this).parent().animate({"top":"120px","left":"50px","font-size": "20px"},1000,"swing");
	}
);
$("#innerMiddleText").animate({"marginTop":"0px"},1000, "swing",
	function(){
	$(this).parent().animate({"top":"150px","left":"50px","font-size": "20px"},1000,"swing");
	}
);
$("#innerStyle").animate({"marginLeft":"0px"},1000, "swing",
	function(){
	$(this).animate({"width":"70px"},1000,"swing");
	$(this).parent().animate({"top":"180px","left":"50px"},1000,"swing");
	}
);
}
function main(){
	$(".bubble").addClass("animate");
	$(".appear").addClass("animate");
}
textLeft();
setTimeout(main,2000);
});
