$(document).ready(function(){
	$(".nav-item-active ").mouseenter(function(){
		$(".nav-link").on({
			mouseenter: function(){
				$(this).css("outline-color","orange");
			}	
		});
	});
	$(".nav-item").mouseenter(function(){
		$(".nav-link").on({
			mouseenter: function(){
				$(this).css("outline-color","orange");
			}	
		});
	});
});