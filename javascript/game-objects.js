/* 
	You wouldn't want to keep all of these objects clumped into one file like this, but for the sake of basic demonstration, I'm going to leave it like this.
	This is where webpack and ES6 would really shine and sparkle! -GoN
*/

// You know that I don't know what those are, and you are just mentioning them to annoy me IN THE HOPE that annoying me will encourage me to look them up -_- -K
//Why the function wrap?
(
	function() 
	{
		"use-strict";



		// Init collection of levels
		var levelMatrices = [];



		// Define dungeon level one matrix
		var LEVEL_1 = 
		[
			['#',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DR',   '.',    '.',    '.',    'DL',   '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#'],
			['#',   '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#'],
			['#',   '.',    '.',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DL',   '.',    '#',    '.',    '#'],
			['#',   '.',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    'DT',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DPL',  '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '#',    '.',    '#',    '#',    '#',    'DT',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    'DB',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#'],
			['#',   'DB',   '#',    'DSB',  '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DL',   '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DSL',  '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    'DR',   '.',    '.',    '.',    'DL',   '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    'DR',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DL',   '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   'DT',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DL',   '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    'DB',   '#',    '#',    '#',    'DT',   '#',    '#',    '#',    '#',    '#',    '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    'DL',   '.',    '#',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    'DPB',  '#',    '#',    '#',    '#',    '#',    'DT',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#'],
			['#',   '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#',    '.',    '#'],
			['#',   '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '.',    '#',    '.',    '#'],
			['#',   '.',    'DSR',  '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DSL',  '.',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    'DL',   '.',    '#',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#'],
			['#',   '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#',    'DST',  '#',    'DT',   '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    'DL',   '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#'],
			['#',   '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    'DT',   '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '#',    '#',    '.',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '.',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '#',    '.',    '.',    '.',    '#',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '.',    '#',    '#',    '#',    '.',    '#',    '.',    '#',    '#',    '#',    '.',    '#'],
			['#',   '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '.',    '#',    '.',    '.',    '.',    '.',    '.',    '#'],
			['#',   '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#',    '#']
		];



		// Add dungeon level 1 to collection of levels
		levelMatrices.push(LEVEL_1);










		/**
		 * TODO Add Header
		 */
		function Game()
		{
			this.stateManager;
			this.player;
			this.levels = [];
			this.appRoot = document.getElementById("gameBoard");
 
			this.init = function()
			{
				this.stateManager = new StateManager();

				this.player = new Player(); 
				levelMatrices.forEach(function(levelMatrix)
				{
					this.levels.push(new Level(levelMatrix));
				}.bind(this));

				this.setupListeners();

				this.stateManager.setCurrentState(this.levels[0]);
				this.start();
			}
 
			this.start = function()
			{
				this.stateManager.getCurrentState().render();
			}
 
			this.update = function()
			{
				this.stateManager.getCurrentState().update();
			}
 
			this.setupListeners = function()
			{
				this.player.setupListeners(); 
				this.levels.forEach(function(level)
				{ 
					if(typeof level.setupListeners === "function")
					{
						level.setupListeners();
					}
				});
			}
		}
 









		/**
		 * TODO Add Header
		 */
		function StateManager()
		{
			this.currentState;
 
			this.setCurrentState = function(state)
			{
				this.currentState = state;
			}
 
			this.getCurrentState = function()
			{
				return this.currentState;
			}
		}
 









		/**
		 * TODO Add Header
		 * @param {[type]}
		 */
		function Level(matrix)
		{
			this.matrix = matrix;
			this.matrix.xMax = this.matrix[0].length;
			this.matrix.yMax = this.matrix.length;

			this.levelHtml = "";
			this.fieldOfView = 10;
 
			this.update = function()
			{
				this.render();
				this.checkHazards();
			}
 
			this.render = function()
			{
				this.levelHtml = "";
				var player = justin.game.player;

				var startingY = (player.yPos - this.fieldOfView >= 0) ? (player.yPos - this.fieldOfView) : 0;
				var startingX = (player.xPos - (this.fieldOfView /* * 2*/) >= 0) ? (player.xPos - (this.fieldOfView /* * 2*/)) : 0;


				for(var y = startingY; y < player.yPos + this.fieldOfView && y < this.matrix.yMax; y++)
				{
					for(var x = startingX;  x < player.xPos + (this.fieldOfView /* * 2*/) && x < this.matrix.xMax; x++)
					{
						if(x === player.xPos && y === player.yPos)
						{
							// Render player sprite
							this.levelHtml += '<img src="../assets/player.PNG" height="20" width="20"/>';
						}
						else
						{
							var boardKey = this.matrix[y][x];
 
							// If the cell represents a door then render Door
							if(boardKey.includes('D'))
							{
								this.levelHtml += '<img src="../assets/door.PNG" height="20" width="20"/>';
							} 
							


							// If the cell represents a wall then render wall
							if(boardKey === '#')
							{
								this.levelHtml += '<img src="../assets/wall.PNG" height="20" width="20"/>';
							} 
							


							// If the cell represents a floor tile then render floor
							if(boardKey === '.')
							{
								this.levelHtml += '<img src="../assets/floor.PNG" height="20" width="20"/>';
							}
						}
					}

					this.levelHtml += '<br/>';
				}

				justin.game.appRoot.innerHTML = this.levelHtml;
			}
 
			this.checkHazards = function()
			{
				var player = justin.game.player;

				if(player.xPos === 4 && player.yPos === 1)
				{
					player.currentHealth--;

					this.levelHtml = '';

					for(var y = 0; y < this.matrix.yMax; y++)
					{
						this.levelHtml += 'YOU DIED<br/>';
					}

					justin.game.appRoot.innerHTML = this.levelHtml;
				}
			}
		}










		/**
		 * TODO Add Header
		 */
		function ContextMenu()
		{
		}










		/**
		 * TODO Add Header
		 * @param {[type]}
		 * @param {[type]}
		 * @param {[type]}
		 */
		function Player(maxHealth, xPos, yPos)
		{
			this.maxHealth = maxHealth || 3;
			this.currentHealth = this.maxHealth;

			this.xPos = xPos || 19;
			this.yPos = yPos || 17;
 
			this.setupListeners = function()
			{
				document.addEventListener("keydown", this.handleKeyPress.bind(this)); // The event object is implicitly passed as a parameter here
			}
 
			this.handleKeyPress = function(event)
			{
				// These should be moved elsewhere so they're accessible everywhere.
				var UP_ARROW = 38;
				var LEFT_ARROW = 37;
				var RIGHT_ARROW = 39;
				var DOWN_ARROW = 40;

				var KEY_W = 87;
				var KEY_A = 65;
				var KEY_S = 83;
				var KEY_D = 68;

				var key = event.keyCode ? event.keyCode : event.which;
				var directionIntent;

				if(key === KEY_W || key === UP_ARROW)
				{
					directionIntent = "up";
				}

				if(key === KEY_A || key === LEFT_ARROW)
				{
					directionIntent = "left";
				}

				if(key === KEY_S || key === DOWN_ARROW)
				{
					directionIntent = "down";
				}

				if(key === KEY_D || key === RIGHT_ARROW)
				{
					directionIntent = "right";
				}

				// Don't do this. Check that the keypress was in an acceptable array of keycodes 
				if(!directionIntent)
				{
					return;
				}

 
				if(this.canMoveInDirection(directionIntent))
				{
					this.move(directionIntent);
				}

				justin.game.update();
			}
 
			this.canMoveInDirection = function(direction)
			{
				// Obvs not ideal to have these here, but works for now.
				var levelMatrix = justin.game.stateManager.getCurrentState().matrix;
				var levelWall = "#";
 
				switch(direction)
				{
					case "left":
						return this.xPos > 0 && levelMatrix[this.yPos][this.xPos - 1] !== levelWall;
					case "up":
						return this.yPos > 0 && levelMatrix[this.yPos - 1][this.xPos] !== levelWall;
					case "right":
						return this.xPos < levelMatrix.xMax && levelMatrix[this.yPos][this.xPos + 1] !== levelWall;
					case "down":
						return this.yPos < levelMatrix.yMax && levelMatrix[this.yPos + 1][this.xPos] !== levelWall;
					default:
						console.log("ya dun effed up.");
				}
			}
 
			this.move = function(direction)
			{
				switch(direction) {
					case "left":
						this.xPos--;
						break;
					case "up":
						this.yPos--;
						break;
					case "right":
						this.xPos++;
						break;
					case "down":
						this.yPos++;
						break;
					default:
						console.log("ya dun effed up.");
				}
			}
		}
 









		/**
		 * TODO Add Header
		 */
		function Door()
		{
			this.isOpen = false;
 
			this.open = function()
			{
			}
		}
	 









		/**
		 * TODO Add Header
		 */
		function Wall()
		{
		}
 









		// Abstract for Doors/Walls?
		function Obstruction()
		{
		}










		// Namespace yoself and keep a reference to the game 
		window.justin =
		{
			game: new Game()
		}
	}
)();