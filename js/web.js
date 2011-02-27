jQuery(document).ready(function() {

	/**
	 * Added for PSC petition form (David Lents)
	 */
	$("#registration").bind("submit", function() {
		
	    if ($("#fname").val().length < 1 || $("#lname").val().length < 1) {
	    	alert('First and last name are both required');
	    	// $("#reg_error").text('Please enter your first and last name');
	        // $("#reg_error").show();
	        $.fancybox.resize();
	        return false;
	    }
	    if ($("#zip").val().length != 5) {
	    	alert('Please enter your 5-digit zip code');
	    	// $("#reg_error").text('Please enter your 5-digit zip code');
	        // $("#reg_error").show();
	        $.fancybox.resize();
	        return false;	    	
	    }
	    
	    $.fancybox.showActivity();

		$.ajax({
			type	: "POST",
			cache	: false,
			url	    : "/scripts/sign_petition.php",
			data	: $(this).serializeArray(),
			success: function(data) {
                $('#mask').hide();
                $('.window').hide();
				$.fancybox(data,{
                        'height' : 260,
                        'width' : 80,
                        'onClosed' : function() {
                            $('#mask').hide();
                            $('.window').hide();
                            $('#ytbox').fadeIn(500);
			            }
                    });
            }
		});
        $.fancybox.resize();
		return false;
	});

	/**
	 * not used...
	 */
	$("#tip5").fancybox({
		'scrolling' : 'no',
		'titleShow'	: false,
		'width'		: 500,
		'height'	: 500,
		'onClosed'	: function() {
		    $("#reg_error").hide();
		}
	});	

});

