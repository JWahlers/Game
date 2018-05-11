// Main Function
function runController()
{
	var gameBoardMatrix = 	[
								['#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DR',	'.',	'.',	'.',	'DL',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#'],
								['#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#'],
								['#',	'.',	'.',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DL',	'.',	'#',	'.',	'#'],
								['#',	'.',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'DT',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DPL',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'#',	'.',	'#',	'#',	'#',	'DT',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'DB',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#'],
								['#',	'DB',	'#',	'DSB',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DL',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DSL',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'DR',	'.',	'.',	'.',	'DL',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'DR',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DL',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'DT',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DL',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'DB',	'#',	'#',	'#',	'DT',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'DL',	'.',	'#',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'DPB',	'#',	'#',	'#',	'#',	'#',	'DT',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#'],
								['#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#',	'.',	'#'],
								['#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'.',	'#',	'.',	'#'],
								['#',	'.',	'DSR',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DSL',	'.',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'DL',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#'],
								['#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#',	'DST',	'#',	'DT',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'DL',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#'],
								['#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'DT',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'#',	'#',	'.',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'.',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'#',	'.',	'.',	'.',	'#',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'.',	'#',	'#',	'#',	'.',	'#',	'.',	'#',	'#',	'#',	'.',	'#'],
								['#',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'.',	'#',	'.',	'.',	'.',	'.',	'.',	'#'],
								['#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#',	'#']
							];




	var gameBoardObject = {'matrix':gameBoardMatrix, 'yMax':gameBoardMatrix.length, 'xMax':gameBoardMatrix[0].length};
	var playerObject = {'x':19, 'y':17};


	window.onkeydown = function(e)
	{
	   	var key = e.keyCode ? e.keyCode : e.which;


			// console.log("move up");
	   	if(key == 87 || key == 38)
	   	{
	   		if(playerObject.y > 0 && gameBoardObject.matrix[playerObject.y -1][playerObject.x] != '#') playerObject.y--;
	   	}


			// console.log("move left");
	   	if(key == 65 || key == 37)
	   	{
	   		if(playerObject.x > 0 && gameBoardObject.matrix[playerObject.y][playerObject.x -1] != '#') playerObject.x--;
	   	}



			// console.log("move down");
	   	if(key == 83 || key == 40)
	   	{
	   		if(playerObject.y < gameBoardObject.yMax && gameBoardObject.matrix[playerObject.y +1][playerObject.x] != '#') playerObject.y++;
	   	}



			// console.log("move right");
	   	if(key == 68 || key == 39)
	   	{
	   		if(playerObject.x < gameBoardObject.xMax && gameBoardObject.matrix[playerObject.y][playerObject.x +1] != '#') playerObject.x++;
	   	}


	   buildMap(gameBoardObject);
	}






	function buildMap(gameBoardObject)
	{
		var board = '';
		var fieldOfView = 10;


		for(var y = (playerObject.y-fieldOfView >= 0) ? (playerObject.y-fieldOfView) : (0); y<playerObject.y +fieldOfView && y < gameBoardObject.yMax; y++)
		{
			for(var x = (playerObject.x-(fieldOfView /* * 2*/) >= 0) ? (playerObject.x-(fieldOfView /* * 2*/)) : (0); x<playerObject.x+(fieldOfView /* * 2*/) && x < gameBoardObject.xMax; x++)
			{
				if(x == playerObject.x && y == playerObject.y)
				{
					// board += '&Otilde;';
					board += '<image src="https://s1.piq.land/2014/10/27/uONjmfqQwnIIoM41JNqiXLnE_400x400.png" height="20" width="20"/>';

				}
				else
				{
					var boardKey = gameBoardObject.matrix[y][x];

					if(boardKey.includes('D')) board += '<image src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Barn_door.png" height="20" width="20"/>';
					else if(boardKey == '#') board += '<image src="https://s1.piq.land/2013/06/27/RKhw2o4kp6FlCm8lFDN0g9yg_400x400.png" height="20" width="20"/>';
					else board += '<image src="https://www.publicdomainpictures.net/pictures/130000/nahled/white-tiles.jpg" height="20" width="20"/>';

				}
			}


			board += '<br/>';
		}


		document.getElementById("gameBoard").innerHTML = board;

	}


	buildMap(gameBoardObject);



	function checkHazards()
	{
		if(xLocation == 4 && yLocation == 4)
		{
			currentHitPoints--;

			var deathString = '';

			for(var y=0; y < yMax; y++)
			{
				deathString += 'YOU DIED<br/>';
				alive = false;
			}

			document.getElementById("gameBoard").innerHTML = deathString;
		}
	}
}