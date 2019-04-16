$("#switch").click(function () {
	if ($(".s12").hasClass("night")) {
		$(".s12").removeClass("night");
		$("#switch").removeClass("switched");
	}
	else {
		$(".s12").addClass("night");
		$("#switch").addClass("switched");

	}
});