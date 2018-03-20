$(document).ready(()=>{
	$(".mymodal").hide();
	$("#btn1").click(()=>{
		$(".mymodal").show();
		$("body").addClass("greybackground");
	});
	$("#closebtn").click(()=>{
		$(".mymodal").hide();
		$("body").removeClass("greybackground");
	});
	
});