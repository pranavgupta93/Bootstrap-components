$(document).ready(()=>{
	$("#item1").hide();
	$("#item2").hide();
	$("#item3").hide();
	$("#link1").click(()=>{
		$("#item1").toggle();
	});
	$("#link2").click(()=>{
		$("#item2").toggle();
	});
	$("#link3").click(()=>{
		$("#item3").toggle();
	});
});