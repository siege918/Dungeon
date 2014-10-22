function Room(id)
{
	var ROOMSIZE = 25;

	this.id = id;
	this.Tiles = new Array();
	
	for (int i = 0; i < ROOMSIZE; i++)
	{
		Tiles[i] = new Array();
	}
}