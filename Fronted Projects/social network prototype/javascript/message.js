increm=3; // on cick functoin select incremental number

// automatically load contact user
function loadcontact()
{
	for(var i=1;i<=29;i++)
	{
		var contacts=document.getElementsByClassName("contacts");
		var contactuser=document.createElement("div");
		contactuser.className="contactuser";
		contacts[0].appendChild(contactuser);
		var onclick="select("+increm+")";
		contactuser.setAttribute("onclick",onclick);
		var userimg=document.createElement("img");
		userimg.className="contimg";
		userimg.src="../images/profile/other_profile.png";
		contactuser.appendChild(userimg);
		var para=document.createElement("p");
		para.className="name";
		var text=document.createTextNode("User Name");
		para.appendChild(text);
		contactuser.appendChild(para);
		increm++;
	}

	// begin chat msg hello after 6ms
	setTimeout(chatmsgrec,600);
}

// msg hello received after 6ms
function chatmsgrec()
{
	var received=document.getElementsByClassName("received");
	received[0].style.display="block";
	// chat msg hi send after 6ms 
	setTimeout(chatmsgsend,600);
}

// msg hi send after 6ms
function chatmsgsend()
{
	var send=document.getElementsByClassName("send");
	send[0].style.display="block";
	// chat msg how are you? received after 8ms
	setTimeout(chatmsgrec1,800);
}

// msg received how are you? after 6ms
function chatmsgrec1()
{
	var received=document.getElementsByClassName("received");
	received[1].style.display="block";
}

// selecting contact user
function select(n)
{
	// alert("hello");
	var received=document.getElementsByClassName("received");
	var send=document.getElementsByClassName("send");
	received[0].style.display="none";
	send[0].style.display="none";
	received[1].style.display="none";

	for(var k=1;k<send.length;k++)
	{
		send[k].remove(); //Deleteing all chat
	}

	var contactuser=document.getElementsByClassName("contactuser");

	for(var i=0;i<contactuser.length;i++)
	{
		contactuser[i].style.border="none";
	}

	contactuser[n-1].style.borderLeft="8px solid #009688";

	// changing name in chat section
	var name=document.getElementsByClassName("name");
	var viewname=document.getElementsByClassName("viewname");
	viewname[0].innerHTML=name[n-1].innerHTML;

	//Changing user img in chat section
	var contimg=document.getElementsByClassName("contimg");
	var chatimg=document.getElementsByClassName("chatimg");
	chatimg[0].src=contimg[n-1].src;
	setTimeout(chatmsgrec,600);
}

// sending msg
function sendmsg()
{
	var textarea=document.getElementById("textarea");
	var chat=document.getElementsByClassName("chatmsg");

	var send=document.createElement("div");
	send.className="send";

	var paapa=textarea.value.replace(/\s/g, "\u00a0");
	textarea.value="";

	var sendpara=document.createElement("p");
	var text3=document.createTextNode(paapa);
	sendpara.appendChild(text3);

	send.appendChild(sendpara);
	send.style.display="block";

	chat[0].appendChild(send);
	chat[0].scrollTop=chat[0].scrollHeight;
}