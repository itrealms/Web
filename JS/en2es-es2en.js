$(function() {
	$("#en2es").click(function() {
		$("#card-en").hide();
		$("#card-es").show();
		$("#en2es").hide();
		$("#es2en").show();
	});
	$("#es2en").click(function() {
		$("#card-en").show();
		$("#card-es").hide();
		$("#en2es").show();
		$("#es2en").hide();
	});
});