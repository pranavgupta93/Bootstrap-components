$(document).ready(()=>{
	$("#collapse").hover(()=>{
		$("#displaymsg").text("Click to see demo of Collapse component");
	});
	$("#collapse").mouseout(()=>{
		$("#displaymsg").text("");
	});

	$("#navbar").hover(()=>{
		$("#displaymsg").text("Click to see demo of Navbar component");
	});
	$("#navbar").mouseout(()=>{
		$("#displaymsg").text("");
	});

	$("#modal").hover(()=>{
		$("#displaymsg").text("Click to see demo of Modal component");
	});
	$("#modal").mouseout(()=>{
		$("#displaymsg").text("");
	});
});