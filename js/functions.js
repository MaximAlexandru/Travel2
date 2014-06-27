function populate(text){
	
	string="what="+text;
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "text",
            data:  string,
            success:function(response){
            	$('.locations-sleep').append(response);
            	
		  }
		});
}
function GetURLParameter(sParam)
	{
	    var sPageURL = window.location.search.substring(1);
	    var sURLVariables = sPageURL.split('&');
	    for (var i = 0; i < sURLVariables.length; i++)
	    {
	        var sParameterName = sURLVariables[i].split('=');
	        if (sParameterName[0] == sParam)
	        {
	            return sParameterName[1];
	        }
	    }
}

function reload_location(text){
		string="location_name="+text;
        $.ajax({
            type: 'POST',
            url: "http://kilometri.ro/brasovtour/mobile/ajax/ajax.php",
   		    dataType: "text",
            data:  string,
            success:function(response){
            	$('.location-content').empty().append(response);
            	
		  }
		});
	
	
}
