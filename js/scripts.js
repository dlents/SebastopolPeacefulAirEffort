$(document).ready(function() {

	// select all the a tag with name equal to modal
	$('a[name=modal]').click(function(e) {
		// Cancel the link behavior
		e.preventDefault();

		// Get the A tag
		var id = $(this).attr('href');

		// Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		// Set heigth and width to mask to fill up the whole screen
		$('#mask').css({
			'width' : maskWidth,
			'height' : maskHeight
		});

		// transition effect
		$('#mask').fadeIn(1000);
		$('#mask').fadeTo("slow", 0.5);

		// Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();

		// Set the popup window to center
		$(id).css('top', winH / 2 - $(id).height() / 2);
		$(id).css('left', winW / 2 - $(id).width() / 2);
        $('#ytbox').hide();
		// transition effect
		$(id).fadeIn(1000);

	});

	// if close button is clicked
	$('.window .close').click(function(e) {
		// Cancel the link behavior
		e.preventDefault();

		$('#mask').hide();
		$('.window').hide();
	});

	// if mask is clicked
	$('#mask').click(function() {
		$(this).hide();
		$('.window').hide();
	});

});

$(document).ready(function() {
	$('input[type="text"]').addClass("idleField");
	$('input[type="text"]').focus(function() {
		$(this).removeClass("idleField").addClass("focusField");
		if (this.value == this.defaultValue) {
			this.value = '';
		}
		if (this.value != this.defaultValue) {
			this.select();
		}
	});
	$('input[type="text"]').blur(function() {
		$(this).removeClass("focusField").addClass("idleField");
		if ($.trim(this.value) == '') {
			this.value = (this.defaultValue ? this.defaultValue : '');
		}
	});
});
