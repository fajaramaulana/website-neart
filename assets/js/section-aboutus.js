$(document).ready(function () {
	$(".animateAbout").hide();
	
	$("#imagination").click(function() {
		$(".animateAbout").hide("slow");
		$("#aboutImagination").show("slow");
	})
	
	$("#technology").click(function() {
		$(".animateAbout").hide("slow");
		$("#aboutTechnology").show("slow");
	})
	
	$("#innocence").click(function() {
		$(".animateAbout").hide("slow");
		$("#aboutInnocence").show("slow");
	})
	
	
	
	$("#brand").click(function(){
		$("#slogan").animate({
    fontSize: "3em",
  }, 1500 );
});

	
	
})
	