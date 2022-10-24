 var loadFile = function(event) {
	    var output = document.getElementById('load1');
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };

 function onbuttoncolor()
 {
 	var on=document.getElementById("browser");
 	on.style.backgroundColor = "#4F82C3";
 	on.style.width="50%";
 }

 function outbuttoncolor()
 {
 	var out=document.getElementById("browser");
 	out.style.backgroundColor = "#00AEEF";
 	out.style.width="97%";
 }