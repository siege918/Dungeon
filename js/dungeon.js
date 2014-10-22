function Dungeon(dungeonSize)
{

	this.Rooms = new Array();
	for (var i = 0; i < dungeonSize; i++)
	{
		this.Rooms[i] = new Array();
	}
}