(function($) {
	$.fn.hidePhoneNum = function(options) {

		var settings = $.extend({
			showNumber: 3,
			linkClass: 'tel-link'
		}, options);

		return this.each(function() {
			var telNum = $(this).data("tel"),
					htmlNum = $(this).html(),
					myRegex = /[\s-\(\()]/g,
					telNewNum = telNum.replace(myRegex, '');

			$(this).html(telNum.substr(0, settings.showNumber) + " " + htmlNum);

			$(this).find('a').on('click', function(e) {
				e.preventDefault();
				$(this).parent().html("<a href='tel:"+telNewNum+"' class='"+settings.linkClass+"'>"+telNum+"</a>")
			})

		});
	};
}(jQuery));
