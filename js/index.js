function learnLess() {
	$(".learnless").hide();
	$("#learnmoretext").slideUp();
	$(".learnmore").show();
	event.preventDefault();
}

function learnMore() {
	$(".learnmore").hide();
	$("#learnmoretext").slideDown();
	$(".learnless").show();
	event.preventDefault();
}

function showLess() {
	$(".readless").hide();
	$("#show-this-on-click").slideUp();
	$(".readmore").show();
	event.preventDefault();
}

function showMore() {
	$(".readmore").hide();
	$("#show-this-on-click").slideDown();
	$(".readless").show();
	event.preventDefault();
}

function start() {
	$(".readless").hide();
	$(".learnless").hide();
	$(".readmore").click(showMore);
	$(".readless").click(showLess);
	$(".learnmore").click(learnMore);
	$(".learnless").click(learnLess);
}

$(document).ready(start);