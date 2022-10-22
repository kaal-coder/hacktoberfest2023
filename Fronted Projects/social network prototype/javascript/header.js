// change header icon text color and image when mouse over it
function headerchange(check)
{
	if(check==1)
	{
		var text=document.getElementById('p1').style.color="white";
		var img=document.getElementById('homaj-home').src="../images/login/home-hover.png";
	}
	else if(check==2)
	{
		var text=document.getElementById('p2').style.color="white";
		var img=document.getElementById('homaj-profile').src="../images/login/profile-hover.png";
	}
	else if(check==3)
	{
		var text=document.getElementById('p3').style.color="white";
		var img=document.getElementById('homaj-society').src="../images/login/society-hover.png";
	}
	else if(check==4)
	{
		var text=document.getElementById('p4').style.color="white";
		var img=document.getElementById('homaj-message').src="../images/login/message-hover.png";
	}
	else if(check==5)
	{
		var text=document.getElementById('p5').style.color="white";
		var img=document.getElementById('homaj-notification').src="../images/login/notification-hover.png";
	}
}


// change header icon text color and image to origin when mouseout
function headerorigin(check)
{
	if(check==1)
	{
		var text=document.getElementById('p1').style.color="black";
		var img=document.getElementById('homaj-home').src="../images/login/home.png";
	}
	else if(check==2)
	{
		var text=document.getElementById('p2').style.color="black";
		var img=document.getElementById('homaj-profile').src="../images/login/profile.png";
	}
	else if(check==3)
	{
		var text=document.getElementById('p3').style.color="black";
		var img=document.getElementById('homaj-society').src="../images/login/society.png";
	}
	else if(check==4)
	{
		var text=document.getElementById('p4').style.color="black";
		var img=document.getElementById('homaj-message').src="../images/login/message.png";
	}
	else if(check==5)
	{
		var text=document.getElementById('p5').style.color="black";
		var img=document.getElementById('homaj-notification').src="../images/login/notification.png";
	}
}


/* ============ Message button bottom =========*/
var check=0; // to check if it is show or not

function showhide()
{
	var msg1=document.getElementById("msg1");
	var msg2=document.getElementById("msg2");
	if(check==0)
	{
		//Expand message box
		msg1.style.height="400px";
		msg2.style.borderBottom="2px solid #BBBBBB"
		check=1;
	}
	else
	{
		//Compress mesage box
		msg1.style.height="30px";
		check=0;
	}

}

var society=0;
// change logo of connect when click
function changelogo(connectID)
{
	var connect=document.getElementById(connectID);
	// alert("hello");
	// connect.style.width="0px";
     connect.innerHTML="";
     // connect.innerHTML="&#x2714";
    

  connect.style.pointerEvents="none";
  connect.style.border= "8px solid #f3f3f3";
  connect.style.borderRadius="50%";
  connect.style.borderTop= "8px solid #009688";
  connect.style.borderBottom= "8px solid #009688";
  connect.style.width= "12px";
  connect.style.height= "12px";
  connect.style.margin="0px";
  connect.style.animation= "spin 2s linear 2";
  connect.style.marginRight="18px";
  // change logo after 3 sec
  setTimeout(function(){
  	  connect.style.animationPlayState= "paused";
	  connect.style.border= "0px";
	  connect.style.borderRadius="0px";
	  connect.style.borderTop= "0px";
	  connect.style.borderBottom= "0px";
	  connect.style.animation= "";
	  connect.style.margin="0px";
	  connect.style.padding="0px";
	  connect.style.marginRight="30px";
	  connect.innerHTML="&#x2714";
	  connect.style.color="#009688";
	  connect.style.fontSize="28px"; 
	  connect.style.pointerEvents="none";
	  
	  // increasing no. of society when clicked on connect
	  society=society+1;

	  var noofsociety=document.getElementById("nosociety");
	  var place=parseInt(noofsociety.innerHTML)+1;
	  noofsociety.innerHTML=place;}, 3000);
	
}