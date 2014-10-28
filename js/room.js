function Room(id)
{
	var ROOMSIZE = 25;

	this.id = id;
	this.Tiles = new Array();
	
	for (var i = 0; i < ROOMSIZE; i++)
	{
		this.Tiles[i] = new Array();
	}
}