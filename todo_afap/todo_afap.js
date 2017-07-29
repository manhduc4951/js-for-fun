// Init some default value for todo list
var lists = ["Buy a new house", "Buy a new car", "Buy a new gf"];
lists.forEach(function(list){	
	var contentHTML = '<li class="bl"><span class="trash"><i class="fa fa-trash-o" aria-hidden="true"></i></span><span class="list">' +
						  list + '</span></li>';
	$("ul").append(contentHTML);
});

// Check off
$("ul").on("click",".bl .list", function() {
	$(this).toggleClass("done");
});


// Delele a todo
$("ul").on("click",".bl .trash", function() {
	//$(this).parent().remove();
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
}); 

// Insert a new todo
$("input").on("keypress", function(e){
	// Press Enter	
	if(e.which == 13) {
		var content = $(this).val();
		var contentHTML = '<li class="bl"><span class="trash"><i class="fa fa-trash-o" aria-hidden="true"></i></span><span class="list">' +
						  content + '</span></li>';
		$("ul").append(contentHTML);
		$(this).val("");
	}
});

// Expand toto list
$("#header .right").on("click", function(){
	if($(this).hasClass("fa-minus")) {
		$(this).removeClass("fa-minus");
		$(this).addClass("fa-plus");
		$("input").attr("disabled", "disabled"); 
	} else {
		$(this).removeClass("fa-plus");
		$(this).addClass("fa-minus");
		$("input").removeAttr("disabled");	
	}

	$(".bl").slideToggle();
	$("input").toggleClass("grey");
});

