;(function($) {

	$.fn.slideNote = function(options) {
		
		var opts = $.extend($.fn.slideNote.defaults, options);
		return this.each(function() {
			
			var $note = $(this).toggle()
									.css(opts.corner, -1 * $(this).width());
			
			if(opts.url !== null) {
				_retrieveData($note, opts);
			}
			
			$(document).scroll(function() {
				if($(this).scrollTop() >= opts.where) {
					if(!$note.is(':visible')) {
						_slideIn($note, opts);
					}
				} else if ($(this).scrollTop() < opts.where) {
					if($note.is(':visible')) {
						_slideOut($note, opts);
					}
				}
			});
			
		});
		
	};
	
	function _slideIn($obj, opts) {	
		var direction = opts.corner === 'right' ? { 'right' : 0 } : { 'left' : 0 } ;
		$obj.show().animate(direction, 1000, 'swing');
	};
	
	function _slideOut($obj, opts) {
		var direction = opts.corner === 'right' ? { 'right' : -1 * $obj.width() } : { 'left' : -1 * $obj.width() }
		$obj.animate(direction, 1000, 'swing', function() {
			$(this).stop(true).hide();
		});
	};
	
	function _retrieveData($obj, opts) {
		
		if(opts.container.indexOf('#') === 0) {
			opts.container = opts.container.substring(1, opts.container.length);
		}
		
		$obj.load(opts.url + ' ' + opts.container, function(data) {
			$(this).append(data);
		});
		
	};

	$.fn.slideNote.defaults = {
		where: 640,
		corner: 'right',
		url: null,
		container: ''
	}
	
})(jQuery);