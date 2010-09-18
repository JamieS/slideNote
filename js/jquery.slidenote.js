;(function($) {

	$.fn.slideNote = function(options) {
		
		var opts = $.extend($.fn.slideNote.defaults, options);
		return this.each(function() {
			
			var $note = $('#note').toggle().width(0);
			
			$(document).scroll(function() {

				if($(this).scrollTop() >= $.fn.slideNote.defaults.where) {
					if(!$note.is(':visible')) {
						$note.show().animate({
							width: 640
						}, 1000);
					}
				} else if ($(this).scrollTop() < $.fn.slideNote.defaults.where) {
					if($note.is(':visible')) {
						$note.animate({
							width: 0
						}, 1000, function() {
							$(this).stop(true).hide();
						});
					}
				}
				
			});
			
		});
	};

	$.fn.slideNote.defaults = {
		where: 640
	}
	
})(jQuery);