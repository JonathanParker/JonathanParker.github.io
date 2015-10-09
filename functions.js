$(document).ready(function(){
	var square = '<div class="square"></div>';
	var erase = false;
	for(var k = 0; k < 900; k++){
		$(".grid").append(square);
	}

	$(".grid").mousedown(function(){
		if(!erase) {
			$(".square").hover(function(){
				$(this).css("background", "SteelBlue");
			})
		}
		else {
			$(".square").hover(function(){
				$(this).css("background", "Azure");
			})
		}
	})

	$(".grid").mouseup(function(){
		$(".square").unbind();
	})

	$(".clear").click(function(){
		$(".square").css("background", "Azure");
	})

	$(".eraser").click(function(){
		erase = !erase;
		if(erase){
			$(this).css("background", "#325E82");
		}
		else {
			$(this).css("background", "SteelBlue");
		}
	})
})