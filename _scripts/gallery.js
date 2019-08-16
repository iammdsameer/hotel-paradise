$(document).ready(function () {
	$('#divId img').on({
		mouseover: function () {
			$(this).css({
				'cursor': 'hand',
				'borderColor': 'red'
			});
		},
		mouseout: function () {
			$(this).css({
				'cursor': 'default',
				'borderColor': 'grey'
			});
		},
		click: function () {
			var imageURL = $(this).attr('src');
			$('#mainImage').fadeOut(500, function () {
				$(this).attr('src', imageURL);
			}).fadeIn(500)
		}
	});
});