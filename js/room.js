window.ROOMHEIGHT = 20;
window.ROOMWIDTH = 25;

 $( document ).ready(
	function() {
		var room = $('.room');
		room.each( function (index, value) {
			for (var y = 0; y < window.ROOMHEIGHT; y++)
			{
				for (var x = 0; x < window.ROOMWIDTH; x++)
				{
					var cell = $('<div class="cell">');
					cell.attr('data-x', x);
					cell.attr('data-y', y);
					if (x == 0 || y == 0 || x == window.ROOMWIDTH - 1 || y == window.ROOMHEIGHT - 1)
					{
						cell.addClass('tile-dungeon-wall');
					}
					else
					{
						cell.addClass('tile-dungeon-floor');
					}
					$(this).append(cell);
				}
			}
		});
	}
 );