window.ROOMHEIGHT = 20;
window.ROOMWIDTH = 25;

 $( document ).ready(
	function() {
		var room = $('.room');
		room.each( function (index, value) {
			for (var x = 0; x < window.ROOMWIDTH; x++)
			{
				for (var y = 0; y < window.ROOMHEIGHT; y++)
				{
					var cell = $('<div class="cell">');
					cell.attr('data-x', x);
					cell.attr('data-y', y);
					cell.addClass('tile-dungeon-wall');
					cell.css('background-color', '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
					$(this).append(cell);
				}
			}
		});
	}
 );