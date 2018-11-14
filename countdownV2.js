// create simple function to ease document.getElementById();
var $ = function(id)
{
	return document.getElementById(id);
}

	
// 	create a function to disable the months without 31 days in them
	function disableDate(s1,s2)
	{
		// get the two select inputs (month and date)
		var s1 = document.getElementById(s1);
		var s2 = document.getElementById(s2);
		// make sure all date are selectable
		if(s1.value == "January")
		{
			for(var i = 1; i <= 31; i++)
			{
				// reset all dates
				$(i).disabled = false;
			}
			
		}
		// if the month does not have 31 days disable the dates accordingly
		else if(s1.value == "February")
		{
			for(var i = 29; i <= 31; i++)
			{
				$(i).disabled = true;
			}
			
		}
		else if(s1.value == "March")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
		}
		else if(s1.value == "April")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
			// if the month is only missing the 31st disable it
			$("31").disabled = true;
			
		}
		else if(s1.value == "May")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
		}
		else if(s1.value == "June")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
			$("31").disabled = true;
		}
		else if(s1.value == "July")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
		}
		else if(s1.value == "August")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
		}
		else if(s1.value == "September")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
			$("31").disabled = true;
		}
		else if(s1.value == "October")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
		}
		else if(s1.value == "November")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
			$("31").disabled = true;
		}
		else if(s1.value == "December")
		{
			for(var i = 1; i <= 31; i++)
			{
				$(i).disabled = false;
			}
		}
		
		
	}
	
	
// 	initialize the interval
var x;
// create function for the timer to update
function timer(s1, s2, s3)
{
	// if the radio button get clean is selected the program must count down
	if(document.getElementById('getClean').checked)
	{
		// disable the stay clean radio button
		$("stayClean").disabled = true;
		
		// disable submit button
		var sub = document.getElementById("sub");
		sub.disabled = true;
		
		// get the month, day, and year selected and pass them into variables
		var s1 = document.getElementById(s1);
		var s2 = document.getElementById(s2);
		var s3 = document.getElementById(s3);
		var month = s1.value;
		var day = s2.value;
		var year = s3.value;
		
		//  create a string from the variables
		var inp = String(month) + " " + String(day) + ", " + String(year);
		// Set the date we're counting down to
		var countDownDate = new Date(inp).getTime();

			x = setInterval(function() {

	  // Get todays date and time
	  var now = new Date().getTime();

	  // Find the distance between now and the count down date
		var distance = countDownDate - now;
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // Display the result in the element with id="demo"
	  document.getElementById("demo").innerHTML = "I will get clean in " + days + " days " + hours + " hours "
		  + minutes + " minutes " + seconds + " seconds";

	  // If the count down is finished, write some text 
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "Time to get clean! You can do anything one step at a time!";
	  }
	}, 1000);
	}
	// // if the radio button stay clean is selected the program must count up
	else if(document.getElementById('stayClean').checked)
	{
		// disable the get clean radio button
		$("getClean").disabled = true;
		
		// disable submit button
		var sub = document.getElementById("sub");
		sub.disabled = true;
		
		// get the month, day, and year selected and pass them into variables
		var s1 = document.getElementById(s1);
		var s2 = document.getElementById(s2);
		var s3 = document.getElementById(s3);
		var month = s1.value;
		var day = s2.value;
		var year = s3.value;
		
		//  create a string from the variables
		var inp = String(month) + " " + String(day) + ", " + String(year);
		// Set the date we're counting down to
		var countDownDate = new Date(inp).getTime();

			x = setInterval(function() {

	  // Get todays date and time
	  var now = new Date().getTime();

	  // Find the distance between now and the count down date
		var distance = now - countDownDate;
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  // Display the result in the element with id="demo"
	  document.getElementById("demo").innerHTML = "I have been clean for " + days + " days " + hours + " hours "
	  + minutes + " minutes " + seconds + " seconds";

	  // If the count down is finished, write some text 
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "Date has not yet passed. Please \"RESET\"";
	  }
	}, 1000);

		
	}
}
// if the user wants to stay clean show the proper text
function sClean()
{
	document.getElementById("desc").innerHTML = "I have been clean since";
	
}
// if the user wants to get clean show the proper text
function gClean()
{
	document.getElementById("desc").innerHTML = "I will get clean on";
	
	
}
// a reset function that triggers when the reset button is hit
function res()
{
	// enable submit button
	var sub = document.getElementById("sub");
	sub.disabled = false;
	
	//stop timer
	clearInterval(x);
	
	//clear countdown
	document.getElementById("demo").innerHTML = "";
	
	//enable radio buttons
	$("stayClean").disabled = false;
	$("getClean").disabled = false;
}



// set the date to today
function setDate()
{
	//get todays month, day, and year
	var today = new Date();
	var todayMonth = today.getMonth();
	var todayDate = today.getDate();
	var todayYear = today.getFullYear();
	
	//simple switch function setting the date on the select form
	switch (todayMonth)
	{
		case 0:
			$("jan").selected = true;
			break;
		case 1:
			$("feb").selected = true;
			break;
		case 2:
			$("mar").selected = true;
			break;
		case 3:
			$("apr").selected = true;
			break;
		case 4:
			$("may").selected = true;
			break;
		case 5:
			$("jun").selected = true;
			break;
		case 6:
			$("jul").selected = true;
			break;
		case 7:
			$("aug").selected = true;
			break;
		case 8:
			$("sep").selected = true;
			break;
		case 9:
			$("oct").selected = true;
			break;
		case 10:
			$("nov").selected = true;
			break;
		case 11:
			$("dec").selected = true;
			break;
		
	}
	
	//simple for loop stepping through the select years and seeing if they match with todays year, then defaulting it
	for(var i = 2008; i <= 2028; i++)
	{
		switch (todayYear)
		{
			case i:
				$(i).selected = true;
				break;
		
		}
	}
	
	//for loop stepping through the possible dates and seeing if they match with todays date and if so, default it
	for(var i = 0; i <= 32; i++)
	switch (todayDate)
	{
		case i:
			$(i).selected = true;
			break;
	}
	
}

// when the window loads, default the date in the select forms
window.onload = function()
{
	setDate();
}