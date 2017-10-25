// JavaScript Document//and jq
function showsbio(){ document.getElementById("demo").innerHTML ="Hello all!<br> This is me, I'm currently 21 years old,born in Iran, Bushehr, Genaveh. I'm studying computer engineering in shiraz university. at first i was studying marine engineering in Persian Gulf University in Bushehr, but after 3semesters i changed my major and started computer engineering and after that i transfered myself to shiraz university. resault is that i am a year behind my scedule, and i don't regret it cause my life is so much better here.";
        //$("#mypic").hide("fast");
		$("#mypic").hide();
		$("#mypic").attr("src","myimage2.png");
		 //$("#mypic").show("fast");
		$("#mypic").fadeIn(700);
		$("#showxbl").hide();
	    $("#sport").hide();
	  $("#gaming").hide();
	   $("#programming").hide(); 
	   	$("#xbl").hide();
     $("#maindiv").css("height","500px");
	 
}
function showsRa(){ document.getElementById("demo").innerHTML = "Coming Soon...";
	   //$("#mypic").hide("fast");
		$("#mypic").hide();
		
		$("#mypic").attr("src","coming-soon_logo.png");
		//$("#mypic").show("fast");
		$("#mypic").fadeIn(1000);
	    
		$("#xbl").hide();
		$("#showxbl").hide();
	  $("#sport").hide();
	  $("#gaming").hide();
	   $("#programming").hide();
     $("#maindiv").css("height","500px");
}

function showsma(){ 
     $("#maindiv").css("height","1200px");
document.getElementById("demo").innerHTML = "My Activities<br>";
      document.getElementById("sport").innerHTML = "Sports: I love most of the sports but i play futsall,ping-pong whenever i get a chance. i took parkour classes for about a year but unfortunetly my hand got broken in an accident and i quit even though i loved it more than all of known sports, the adernaline and the danger was really fun but i guess it is better this way.."
	  $("#sport").fadeIn();
	  document.getElementById("gaming").innerHTML = "Video Games: my main passon in life is video games and i really enjoy playing video games and i've been doing it since i was a kid and i can count myself as a pro gamer since i got my history in xbox live for sometime now to prove it, if you're interested you can check my gamertag, the link is at the bottom of this text. rest will come later. for activity i got a little skill in making trainers and hacking games on pc. as i said in my bio i'm a freak for video games and i'm more of a console fan and to be specific, xbox! i really enjoy playing online cause it's more challenging when you're against other players. recently i'm trying to save money to buy and xbox one! and i hope i get it soon.";
	  $("#gaming").fadeIn();
	  $("#showxbl").fadeIn(1000);
	  document.getElementById("programming").innerHTML = "Programming: the languages that i know for writing software program are C,C++,Java,assembly and for hardware verilog. i have been trying to learn web site design with html,css,js and that's the reason i made this website about myself.";
	  $("#programming").fadeIn(); 
	    //$("#mypic").hide("fast");
		$("#mypic").hide();
		
		$("#mypic").attr("src","myimage.png");
		//$("#mypic").show("fast");
		$("#mypic").fadeIn(1000);
	   
	
}
 function showsContact(){
	  document.getElementById("demo").innerHTML = "Contact<br>Email: Hooman.malekzadeh@outlook.com<br>FB: Hooman Malekzawdeh<br>Skype: Hooman.malekzadeh@outlook.com (H2oMaN)"
		$("#xbl").hide();
		$("#showxbl").hide();
	  $("#sport").hide();
	  $("#gaming").hide();
	   $("#programming").hide();
     $("#maindiv").css("height","500px");
    	//$("#mypic").hide("fast");
		$("#mypic").hide();
		$("#mypic").attr("src","Contact.png");
		//$("#mypic").show("fast");
		$("#mypic").fadeIn(1000);    
	 }
 $(document).ready(function(e) {
   $("#showxbl").click(function(){
	 	$("#xbl").fadeIn(1000);
	
	 }); 
});

function closewindow(){
window.close();
}
function showdate(){
	
var d = new Date();
var time = Date().slice(16,25);
var date = Date().slice(0,16);
document.getElementById("date").innerHTML = time + "<br>" + date;
}
$(document).ready(function(){$("#myheader").click(function(){
	if($(this).css("-webkit-animation").match("slide 2s"))
	{
	   $(this).css("-webkit-animation","slide2 2s");
	} else    $(this).css("-webkit-animation","slide 2s");
	});});
	
$(document).ready(function(){$("#myheader").click(function(){
	if($(this).css("-webkit-animation").match("slide 2s"))
	{
	   $(this).css("-webkit-animation","slide2 2s");
	} else    $(this).css("-webkit-animation","slide 2s");
	});});
/*function check(){
	
	var check = navigator.appVersion;
	document.getElementById("version").innerHTML = check;
	
}*/



