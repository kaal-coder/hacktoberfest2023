var connect=6;

function loadconnection()
{
	
    var loader=document.getElementById("viewmore");
	loader.className="loader";
	loader.innerHTML="";

	setTimeout(function(){var parent=document.getElementsByClassName("people");

   for(var i=0;i<12;i++)
   {
	var connection=document.createElement("div");
	connection.className="connection";
	parent[0].appendChild(connection);

	var image=document.createElement("img");
	image.src="../images/profile/upload1.png";
	connection.appendChild(image);

	var header=document.createElement("h5");
	var text=document.createTextNode("User Name");
	header.appendChild(text);
	connection.appendChild(header);

	var para=document.createElement("p");
	var text1=document.createTextNode("Secondary School");
	para.appendChild(text1);
	connection.appendChild(para);

	var anchor=document.createElement("a");
	// anchor.setAttribute("href", "");
	var text2=document.createTextNode("\u271A Connect");
	anchor.appendChild(text2);
	anchor.id="connect"+connect;
	var argument="changelogo1('connect"+connect+"')";
	anchor.setAttribute("onclick",argument);
	connection.appendChild(anchor);
	connect++;

	loader.className="viewmore";
		loader.innerHTML="More";
	}
},3000);
}



// change logo of connect when click
function changelogo1(connectID)
{
	var connect=document.getElementById(connectID);
	// alert("hello");
	// connect.style.width="0px";
     connect.innerHTML="";
     // connect.innerHTML="&#x2714";
    

  connect.style.pointerEvents="none";
  connect.style.border= "8px solid white";
  connect.style.borderRadius="50%";
  connect.style.borderTop= "8px solid #009688";
  connect.style.borderBottom= "8px solid #009688";
  connect.style.width= "12px";
  connect.style.height= "12px";
  connect.style.marginBottom="5px";
  connect.style.animation= "spin 2s linear 2";
  connect.style.marginLeft="auto";
  connect.style.marginRight="auto";
  connect.style.boxShadow="none";
  // change logo after 3 sec
  setTimeout(function(){
  	  connect.style.animationPlayState= "paused";
	  connect.style.border= "0px";
	  connect.style.borderRadius="0px";
	  connect.style.animation= "";
	  connect.style.marginRight="auto";
	  connect.style.marginLeft="auto";
	  connect.innerHTML="&#x2714";
	  connect.style.color="#009688";
	  connect.style.fontSize="28px"; 
	  connect.style.height= "28px";
	  connect.style.pointerEvents="none";
	  
	  // increasing no. of society when clicked on connect

	  var noofsociety=document.getElementById("nosociety");
	  var place=parseInt(noofsociety.innerHTML)+1;
	  noofsociety.innerHTML=place;}, 3000);
	
}