function dropdownMenu() {
	var x = document.getElementById("clickdropdown");
	if (x.className === "topnav") {
		x.className += " response";
	}else{
		x.className === "topnav";
	}
}