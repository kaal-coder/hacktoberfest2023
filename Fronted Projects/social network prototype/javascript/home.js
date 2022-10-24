var incre=3; //For incrementing the id name for like,dislike,thumbsup and thumbsdown

// function loading()
// {

// }


// function to load a new post when click on viewmore
function newpost()
{
    var loader=document.getElementById("viewmore");
	loader.className="loader";
	loader.innerHTML="";

	// load new post after 3 sec
	setTimeout(function()
	{  

	for(var i=0;i<10;i++)
	{
		/*====Parent DIV (mainpost)========*/
		var div=document.createElement("DIV");
		div.className="mainpost";

		/* -------- adding div at the bottom ---------*/
		var parent=document.getElementsByClassName("allpost");
		parent[0].appendChild(div);
		// var hr=document.createElement("hr");
		// parent[0].appendChild(hr);

		/*============ DIV userimg ===============*/
		var div1=document.createElement("DIV");
		div1.className="userimg";
		var img=document.createElement("img");
		img.src="../images/profile/other_profile.png";
		div1.appendChild(img);
		div.appendChild(div1);

		/*============ DIV username ===============*/
		var div2=document.createElement("DIV");
		div2.className="username";
		var para=document.createElement("p");
		para.className="name";
		var text1=document.createTextNode("User Name");
		para.appendChild(text1);
		div2.appendChild(para);
		div.appendChild(div2);

		/*---------- paragraph time ---------------*/
		var para1=document.createElement("p");
		para1.className="time";
		var text2=document.createTextNode("2hr ago");
		para1.appendChild(text2);
		div.appendChild(para1);

		/*---------- paragraph quotes ---------------*/
		var para2=document.createElement("p");
		para2.className="quotes";
		var text3=document.createTextNode("I want a world where everything is welcome, everything is valid, everything is acknowledged, embraced, and accepted. To me, that's a perfect world.");
		para2.appendChild(text3);
		div.appendChild(para2);

		/*============ DIV post ===============*/
		var div3=document.createElement("DIV");
		div3.className="post";
		var img1=document.createElement("img");
		img1.className="postimg";
		// img1.src="../images/login/society.jpg";
		div3.appendChild(img1);
		div.appendChild(div3);

		/*============ DIV likedislike ===============*/
		var div4=document.createElement("DIV");
		div4.className="likedislike";
		/*$$$$$$$$$$ paragraph like $$$$$$$$$$$$$$$$*/
		var para3=document.createElement("p");
		para3.className="like";
		/*........... Span nooflike ............*/
		var span1=document.createElement("span");
		span1.className="nooflike";
		span1.id="like"+incre;
		var spantext=document.createTextNode("0 ");
		span1.appendChild(spantext);
		var text4=document.createTextNode(" likes \u00a0 ");
		para3.appendChild(span1);
		para3.appendChild(text4);
		div4.appendChild(para3);
	    /*........... Span noofdislike ............*/
		var span2=document.createElement("span");
		span2.className="noofdislike";
		span2.id="dislike"+incre;
		var spantext1=document.createTextNode("0 ");
		span2.appendChild(spantext1);
		var text5=document.createTextNode(" dislikes");
		para3.appendChild(span2);
		para3.appendChild(text5);
		div4.appendChild(para3);
		/*$$$$$$$$$$$ paragraph likedisbttn $$$$$$$$$$$$$$$*/
		var para4=document.createElement("p");
		para4.className="likedisbttn";
		/*........... Span fa fa-thumbs-up ............*/
		var span3=document.createElement("span");
		span3.className="fa fa-thumbs-up";
		span3.id="thumbsup"+incre;
		// span3.setAttribute("onClick",fun1);
		// para4.appendChild(span3);
		// div4.appendChild(para4);
	    /*........... Span noofdislike ............*/
		var span4=document.createElement("span");
		span4.className="fa fa-thumbs-down";
		span4.id="thumbsdown"+incre;
		/*^^^^^^^^^^ Span3 onclick code and append ^^^^^^^^^^*/
		var fun1="increase"+"("+"'"+span1.id+"'"+","+"'"+span2.id+"'"+","+"'"+span3.id+"'"+","+"'"+span4.id+"'"+");";
		span3.setAttribute("onClick",fun1);
		para4.appendChild(span3);
		div4.appendChild(para4);
		/*^^^^^^^^^^ Span4 onclick code and append ^^^^^^^^^^*/
		var fun2="decrease"+"("+"'"+span1.id+"'"+","+"'"+span2.id+"'"+","+"'"+span3.id+"'"+","+"'"+span4.id+"'"+");";
		span4.setAttribute("onclick",fun2);
		para4.appendChild(span4);
		div4.appendChild(para4);
		/*############## Appending DIV4 ############*/
		div.appendChild(div4);

		incre++;
		loader.className="viewmore";
		loader.innerHTML="View More";
	}

	},3000);
	// end of load a new post after 3 sec
		
}


// function to post a new post
function mypost()
{
	/*====Parent DIV (mainpost)========*/
	var div=document.createElement("DIV");
	div.className="mainpost";

	/* -------- adding div at the top ---------*/
	var parent=document.getElementsByClassName("allpost");
	parent[0].insertBefore(div, parent[0].childNodes[0]);
	// var hr=document.createElement("hr");
	// parent[0].insertBefore(hr, parent[0].childNodes[1]);

	/*============ DIV userimg ===============*/
	var div1=document.createElement("DIV");
	div1.className="userimg";
	var img=document.createElement("img");
	img.src="../images/profile/upload.png";
	div1.appendChild(img);
	div.appendChild(div1);

	/*============ DIV username ===============*/
	var div2=document.createElement("DIV");
	div2.className="username";
	var para=document.createElement("p");
	para.className="name";
	var text1=document.createTextNode("Rajkumar Rocktim Narayan Singha");
	para.appendChild(text1);
	div2.appendChild(para);
	div.appendChild(div2);

	/*---------- paragraph time ---------------*/
	var para1=document.createElement("p");
	para1.className="time";
	var text2=document.createTextNode("Just now");
	para1.appendChild(text2);
	div.appendChild(para1);

	/*---------- paragraph quotes ---------------*/
	var para2=document.createElement("p");
	para2.className="quotes";
	var pararec=document.getElementById("mypara");
	// var paapa=pararec.value;
	var paapa=pararec.value.replace(/\s/g, "\u00a0");
	pararec.value="";

	var text3=document.createTextNode(paapa);
	para2.appendChild(text3);
	div.appendChild(para2);

	/*============ DIV post ===============*/
	var div3=document.createElement("DIV");
	div3.className="post";
	var img1=document.createElement("img");
	img1.className="postimg";
	var output = document.getElementById('load2');
    img1.src = output.src;
    output.src="";
	div3.appendChild(img1);
	div.appendChild(div3);

	/*============ DIV likedislike ===============*/
	var div4=document.createElement("DIV");
	div4.className="likedislike";
	/*$$$$$$$$$$ paragraph like $$$$$$$$$$$$$$$$*/
	var para3=document.createElement("p");
	para3.className="like";
	/*........... Span nooflike ............*/
	var span1=document.createElement("span");
	span1.className="nooflike";
	span1.id="like"+incre;
	var spantext=document.createTextNode("0 ");
	span1.appendChild(spantext);
	var text4=document.createTextNode(" likes \u00a0 ");
	para3.appendChild(span1);
	para3.appendChild(text4);
	div4.appendChild(para3);
    /*........... Span noofdislike ............*/
	var span2=document.createElement("span");
	span2.className="noofdislike";
	span2.id="dislike"+incre;
	var spantext1=document.createTextNode("0 ");
	span2.appendChild(spantext1);
	var text5=document.createTextNode(" dislikes");
	para3.appendChild(span2);
	para3.appendChild(text5);
	div4.appendChild(para3);
	/*$$$$$$$$$$$ paragraph likedisbttn $$$$$$$$$$$$$$$*/
	var para4=document.createElement("p");
	para4.className="likedisbttn";
	/*........... Span fa fa-thumbs-up ............*/
	var span3=document.createElement("span");
	span3.className="fa fa-thumbs-up";
	span3.id="thumbsup"+incre;
	// span3.setAttribute("onClick",fun1);
	// para4.appendChild(span3);
	// div4.appendChild(para4);
    /*........... Span noofdislike ............*/
	var span4=document.createElement("span");
	span4.className="fa fa-thumbs-down";
	span4.id="thumbsdown"+incre;
	/*^^^^^^^^^^ Span3 onclick code and append ^^^^^^^^^^*/
	var fun1="increase"+"("+"'"+span1.id+"'"+","+"'"+span2.id+"'"+","+"'"+span3.id+"'"+","+"'"+span4.id+"'"+");";
	span3.setAttribute("onClick",fun1);
	para4.appendChild(span3);
	div4.appendChild(para4);
	/*^^^^^^^^^^ Span4 onclick code and append ^^^^^^^^^^*/
	var fun2="decrease"+"("+"'"+span1.id+"'"+","+"'"+span2.id+"'"+","+"'"+span3.id+"'"+","+"'"+span4.id+"'"+");";
	span4.setAttribute("onclick",fun2);
	para4.appendChild(span4);
	div4.appendChild(para4);
	/*############## Appending DIV4 ############*/
	div.appendChild(div4);

	incre++;
}

/*======== Like increase =========*/

function increase(likerec,dislikerec,thumbsuprec,thumbsdownrec)
{
	var idname1=likerec;
	var idname2=dislikerec;
	var thumbsup=thumbsuprec;
	var thumbsdown=thumbsdownrec;
	var like=document.getElementById(idname1);
	like.innerHTML=parseInt(like.innerHTML)+1;
	var up=document.getElementById(thumbsup);
	up.style.color= "#009688";
	up.style.pointerEvents="none";
	var down=document.getElementById(thumbsdown)
	if(down.style.color=="rgb(0, 150, 136)")
	{
		var dislike=document.getElementById(idname2);
		dislike.innerHTML=parseInt(dislike.innerHTML)-1;
	}
	down.style.color="black";
	down.style.pointerEvents="all";
}

/*============== Like decrease ================*/
function decrease(likerec,dislikerec,thumbsuprec,thumbsdownrec)
{
	var idname1=likerec;
	var idname2=dislikerec;
	var thumbsup=thumbsuprec;
	var thumbsdown=thumbsdownrec;
	var dislike=document.getElementById(idname2);
	dislike.innerHTML=parseInt(dislike.innerHTML)+1;
	var down=document.getElementById(thumbsdown);
	down.style.color= "#009688";
	down.style.pointerEvents="none";
	var up=document.getElementById(thumbsup);
	if(up.style.color=="rgb(0, 150, 136)")
	{
		var like=document.getElementById(idname1);
		like.innerHTML=parseInt(like.innerHTML)-1;
	}
	up.style.color="black";
	up.style.pointerEvents="all";
}


// load view image to be posted
 var loadFile = function(event) {
	    var output = document.getElementById('load2');
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };

// changing imagebutton color on hover
 function onbuttoncolor()
 {
 	var on=document.getElementById("imgbttn");
 	on.style.backgroundColor = "#009688";
 	on.style.color="white";
 }

// chaging imagebutton color on hover out
 function outbuttoncolor()
 {
 	var out=document.getElementById("imgbttn");
 	out.style.backgroundColor = "white";
 	out.style.color="black";
 }
