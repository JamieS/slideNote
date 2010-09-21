module("initialization");
test("setup", function() {
	function defined() {
		return $("#note").length;
	}
	equal(defined(), 1, 'A single instance of the note container is found.');
});

module("options");
test("default where value", function() {
	function defaultWhereValue() {
		return $.fn.slideNote.defaults.where
	}
	equal(defaultWhereValue(), 640, 'The default value for where to display the note if no value is defined.');
});

test("specified where value", function() {
	function specifiedWhereValue() {
		$('#note').slideNote({
			where: 100
		});
		return $.fn.slideNote.defaults.where;
	}
	equal(specifiedWhereValue(), 100, 'The specified value for where to display the note if no value is defined.');
});

test("default corner value", function() {
	function defaultCornerValue() {
		return $.fn.slideNote.defaults.corner
	}
	equal(defaultCornerValue(), 'right', 'The default corner where the note is displayed.');
});

test("specified corner value", function() {
	function specifiedWhereValue() {
		$('#note').slideNote({
			corner: 'left'
		});
		return $.fn.slideNote.defaults.corner;
	}
	equal(specifiedWhereValue(), 'left', 'The specified value for where to display the note if no value is defined.');
});

test("default url value", function() {
	function defaultUrlValue() {
		return $.fn.slideNote.defaults.url
	}
	equal(defaultUrlValue(), null, 'The default URL if none is specified.');
});

test("specified url value", function() {
	function specifiedUrlValue() {
		$('#note').slideNote({
			url: 'ajax.html'
		});
		return $.fn.slideNote.defaults.url;
	}
	equal(specifiedUrlValue(), 'ajax.html', 'The value when a URL is specified.');
});

test("default container value", function() {
	function defaultUrlValue() {
		return $.fn.slideNote.defaults.container
	}
	equal(defaultUrlValue(), '', 'The default ajax element ID if none is specified.');
});

test("specified url value", function() {
	function specifiedUrlValue() {
		$('#note').slideNote({
			container: 'container'
		});
		return $.fn.slideNote.defaults.container;
	}
	equal(specifiedUrlValue(), '#container', 'The value when a container is specified.');
});