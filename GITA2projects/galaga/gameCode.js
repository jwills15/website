	
	//canvas vars
	var canvas;
	var ctx;
	var HEIGHT = 500 * 1;
	var WIDTH = 440 * 1;
	
	//key vars
	var leftDown = false;
	var rightDown = false;
	
	//ship vars
	var shipX = -205;
	var shipY = -430;
	
	var shipImage = "ship";
	
	var shipDX = 2;
	
	var shipHit = false;
	
	var fireAbility = false;
	var moveAbility = false;
	
	//bullet vars
	var bulletX1 = -217;
	var bulletY1 = -430;
	var bulletX2 = -217;
	var bulletY2 = -430;
	
	var bulletDY = 3;
	
	//interface vars
	var menuScreen = true;
	var gameScreen = false;
	var scoresScreen = false;
	var mainMenu = true;
	var helpMenu = false;
	var aboutMenu = false;
	var ratioScreen = false;
	var highScreen = false;

	var playTri = true;
	var aboutTri = false;
	var helpTri = false;
	
	var life1 = true;
	var life2 = true;
	var life3 = true;
	var addLife3 = false;
	
	var level = 1;
	var score = 0;
	var highscore = 20000;
	var hits = 0;
	var shots = 0;
	
	var drawStageVar = false;
	var drawReadyVar = false;
	var drawGameOverVar = false;
	var drawNextLevelVar = false;
	var drawStartVar = false;
	
	var alien1score = 50;
	var alien2score = 80;
	var alien3score = 400;
	
	var alien1hits = 0;
	var alien2hits = 0;
	var alien3hits = 0;
	
	//timer vars
		//ship bullet vars
		var bulletFireOn1 = false;
		var bulletTimerVar1;
		var bulletFireOn2 = false;
		var bulletTimerVar2;
		//start game vars
		var startGameOn = true;
		var startGameVar;
		var startGameTracker = 0;
		//next level vars
		var nxtLvlOn = false;
		var nxtLvlVar;
		var nextLevelTracker = 0;
		//alien idle movement vars
		var AIMon = false;
		var AIMvar;
		var AIMtracker = 0;
		//alien starting position vars
		var startPosOn = false;
		var startPosVar;
		var startPosTracker = 0;
		var startPosSpeed = 60;
		//alien explode 1 timer vars
		var alExpl1on = false;
		var alExpl1var;
		//alien explode 2 timer vars
		var alExpl2on = false;
		var alExpl2var;
		//alien explode 3 timer vars
		var alExpl3on = false;
		var alExpl3var;
		//alien 1 move timer vars
		var alMove1on = false;
		var alMove1var;
		//alien 2 move timer vars
		var alMove2on = false;
		var alMove2var;
		//alien 3 move timer vars
		var alMove3on = false;
		var alMove3var;
		
		//ship explode vars
		var shipExplOn = false;
		var shipExplVar;
		var shipExplodeTracker = 0;
		var whichLife = 0;
	
	//alien explode vars
		//alien explode 1
		var explodeTracker1 = 0;
		var whichAlienExplode1 = 0;
		//alien explode 2
		var explodeTracker2 = 0;
		var whichAlienExplode2 = 0;
		//alien explode 3
		var explodeTracker3 = 0;
		var whichAlienExplode3 = 0;
		
	//alien movements
		var alienMoveSpeed = 35;
		//alien 1 moving
		var alien1moveTracker = 0;
		var whichAlien1move = 20;
		var alien1return = false;
		var alien1targetX = 0;
		//alien 2 moving
		var alien2moveTracker = 0;
		var whichAlien2move = 20;
		var alien2return = false;
		var alien2targetX = 0;
		//alien 3 moving
		var alien3moveTracker = 0;
		var whichAlien3move = 20;
		var alien3return = false;
		var alien3targetX = 0;
	
	//arrays
	var alien1 = new Array();
	var alien2 = new Array();
	var alien3 = new Array();
	var alienBullets = new Array();
	
// INITIALIZING start
	
	function init() 
	{
		window.addEventListener('keydown',doKeyDown,true);
		window.addEventListener('keyup',doKeyUp,true);
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d");
		makeAliens();
		checkCookie();
		
		return setInterval(draw, 10);
	}
	
	function defineAlien1(x, y)
	{
		this.x = x;
		this.y = y;
		this.image = "alien1v1down";
		this.initialImage = "alien1v1down";
		this.initialX = x;
		this.initialY = y;
		this.moving = false;
		this.hit = false;
	}
	
	function defineAlien2(x, y)
	{
		this.x = x;
		this.y = y;
		this.image = "alien2v1down";
		this.initialImage = "alien2v1down";
		this.initialX = x;
		this.initialY = y;
		this.moving = false;
		this.hit = false;
	}
	
	function defineAlien3(x, y)
	{
		this.x = x;
		this.y = y;
		this.image = "alien3v1down";
		this.initialImage = "alien3v1down";
		this.hits = 0;
		this.initialX = x;
		this.initialY = y;
		this.moving = false;
		this.hit = false;
	}
	
	function defineBullets(x, y)
	{
		this.x = x;
		this.y = y;
		this.image = "alienBullet";
		this.fired = false;
		this.targetX = 0 * 1;
		this.timerVar = null;
		this.DX = 0;
		this.fireAbility = false;
	}
	
	function makeAliens()
	{
		for (var i = 0; i < 20; i++)
		{
			var xcoord;
			var ycoord;
			alien1[i] = new defineAlien1(xcoord, ycoord);
		}
		for (var i = 0; i < 16; i++)
		{
			var xcoord = -100;
			var ycoord = -100;
			alien2[i] = new defineAlien2(xcoord, ycoord);
		}
		for (var i = 0; i < 4; i++)
		{
			var xcoord = -100;
			var ycoord = -100;
			alien3[i] = new defineAlien3(xcoord, ycoord);
		}
		for (var i = 0; i < 3; i++)
		{
			var xcoord = -100;
			var ycoord = -100;
			alienBullets[i] = new defineBullets(xcoord, ycoord);
		}
	}
	
	function doKeyDown(evt)
	{
		//key = evt.which;
		if (gameScreen == true)
		{
			switch (evt.which) 
			{
				case 37:  
				leftDown = true;
				break;
				
				case 39: 
				rightDown = true;
				break;
				
				case 83:
				if (bulletFireOn1 == false && shipHit == false && fireAbility == true)
				{
					var sound = document.getElementById("shot"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
					bulletX1 = shipX + 12;
					bulletY1 = shipY;
					bulletFireOn1 = true;
					bulletTimer1();
					shots += 1;
				}
				else if (bulletFireOn2 == false && bulletFireOn1 == true && shipHit == false && fireAbility == true)
				{
					var sound = document.getElementById("shot"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
					bullet2 = shipX + 12;
					bulletY2 = shipY;
					bulletFireOn2 = true;
					bulletTimer2();
					shots += 1;
				}
				break;
			}
		}
		else if (menuScreen == true)
		{
			switch (evt.which) 
			{
				case 38:  
				if (mainMenu == true)
				{
					if (helpTri == true)
					{
						playTri = true;
						helpTri = false;
					}
					else if (aboutTri == true)
					{
						helpTri = true;
						aboutTri = false;
					}
					else if (playTri == true)
					{
						playTri = false;
						aboutTri = true;
					}
				}
				break;
				
				case 40: 
				if (mainMenu == true)
				{
					if (helpTri == true)
					{
						aboutTri = true;
						helpTri = false;
					}
					else if (playTri == true)
					{
						helpTri = true;
						playTri = false;
					}
					else if (aboutTri == true)
					{
						playTri = true;
						aboutTri = false;
					}
				}
				break;
				
				case 13:
				if (mainMenu == true)
				{
					if (playTri == true)
					{
						menuScreen = false;
						mainMenu = false;
						gameScreen = true;
						var sound = document.getElementById("creditSound"); 
						sound.pause();
						sound.currentTime = 0;
						sound.play();
						timerStartGame();
					}
					else if (helpTri == true)
					{
						helpMenu = true;
						mainMenu = false;
					}
					else if (aboutTri == true)
					{
						aboutMenu = true;
						mainMenu = false;
					}
				}
				else if (helpMenu == true)
				{
					helpMenu = false;
					mainMenu = true;
				}
				else if (aboutMenu == true)
				{
					aboutMenu = false;
					mainMenu = true;
				}
				break;
			}
		}
	}
	
	function doKeyUp(evt)
	{
		//key = evt.which;
		switch (evt.which) 
		{
			case 37:  
			leftDown = false;
			break;
			
			case 39: 
			rightDown = false;
			break;
		}
	}
	
// INITIALIZING end
	
	
// DRAW start
	
	function draw()
	{
		clear();
		
		if (menuScreen == true)
		{
			drawMenu();
		}
		else if (gameScreen == true)
		{
			moveShip();
			drawLives();
			drawLevel();
			drawScores();
			drawBullet();
			drawShip();
			drawAliens();
			drawAlienBullet();
			if (drawReadyVar == true)
			{
				drawReady();
			}
			if (drawGameOverVar == true)
			{
				drawGameOver();
			}
			if (drawNextLevelVar == true)
			{
				drawNextLevel();
			}
			if (drawStartVar == true)
			{
				drawStart();
			}
			if (score >= 20000 && addLife3 == false)
			{
				var sound = document.getElementById("extend"); 
				sound.pause();
				sound.currentTime = 0;
				sound.play();
				
				addLife3 = true;
				if (life1 == false)
				{
					life1 = true;
				}
				else if (life2 == false)
				{
					life2 = true;
				}
				else if (life3 == false)
				{
					life3 = true;
				}
			}
		}
		else if (scoresScreen == true)
		{
			drawScoresScreen();
			drawScores();
			drawLevel();
		}
	}
	
	function clear()
	{
		ctx.clearRect(0, 0, WIDTH, HEIGHT);
	}
	
	function drawMenu()
	{
		if (mainMenu == true)
		{
			var img = document.getElementById("galagaLogo");
			ctx.drawImage(img, 80, 60);
			ctx.fillStyle = "#65FDFF";
			ctx.font = "20px emulogic";
			ctx.textAlign = "left";
			ctx.fillText("1 Player", 150, 260);
			ctx.fillText("Help", 150, 320);
			ctx.fillText("About", 150, 380);
		
			
			if (helpTri == true)
			{
				ctx.beginPath();
				ctx.moveTo(120,302);
				ctx.lineTo(132,312);
				ctx.lineTo(120,322);
				ctx.fill();
			}
			else if (aboutTri == true)
			{
				ctx.beginPath();
				ctx.moveTo(120,362);
				ctx.lineTo(132,372);
				ctx.lineTo(120,382);
				ctx.fill();
			}
			else if (playTri == true)
			{
				ctx.beginPath();
				ctx.moveTo(120,242);
				ctx.lineTo(132,252);
				ctx.lineTo(120,262);
				ctx.fill();
			}
			ctx.font = "9px emulogic";
			ctx.textAlign = "center";
			ctx.fillText("Use the Arrow Keys to select and press Enter", 220, 490);
		}
		else if (helpMenu == true)
		{
			ctx.fillStyle = "#65FDFF";
			ctx.font = "16px emulogic";
			ctx.textAlign = "left";
			ctx.fillText("-Scoring-", 25, 40);
			var img1 = document.getElementById("alien1v1up");
			ctx.drawImage(img1, 27, 50);
			var img2 = document.getElementById("alien2v1up");
			ctx.drawImage(img2, 27, 80);
			var img3 = document.getElementById("alien3v1up");
			ctx.drawImage(img3, 25, 108);
			ctx.font = "10px emulogic";
			ctx.fillText("50 Points", 60, 65);
			ctx.fillText("80 Points", 60, 95);
			ctx.fillText("400 Points", 60, 128);
			
			ctx.font = "16px emulogic";
			ctx.fillText("-Controls-", 240, 40);
			var img4 = document.getElementById("leftArrow");
			ctx.drawImage(img4, 240, 50);
			var img5 = document.getElementById("rightArrow");
			ctx.drawImage(img5, 240, 95);
			var img6 = document.getElementById("sKey");
			ctx.drawImage(img6, 240, 140);
			ctx.font = "10px emulogic";
			ctx.fillText("Move Left", 290, 75);
			ctx.fillText("Move Right", 290, 120);
			ctx.fillText("Shoot", 290, 165);
			
			ctx.font = "16px emulogic";
			ctx.fillText("-Levels-", 25, 230);
			ctx.font = "10px emulogic";
			ctx.fillText("Level 1: Normal Aliens", 25, 255);
			ctx.fillText("Level 2: Faster Aliens", 25, 280);
			ctx.fillText("Level 3: Blue Aliens Begin Shooting", 25, 305);
			ctx.fillText("Level 4: Red Aliens Begin Shooting", 25, 330);
			ctx.fillText("Level 5: Galagas Begin Shooting", 25, 355);
			ctx.fillText("Level 6+: Increasing Alien Speed", 25, 380);
			
			ctx.textAlign = "right";
			ctx.fillText("Passing 20,000 Points", 420, 415);
			ctx.fillText("results in an extra life.", 420, 435);
			
			ctx.textAlign = "left";
			ctx.font = "20px emulogic";
			ctx.fillText("Back", 180, 480);
			ctx.beginPath();
			ctx.moveTo(160,462);
			ctx.lineTo(172,472);
			ctx.lineTo(160,482);
			ctx.fill();
		}
		else if (aboutMenu == true)
		{
			ctx.fillStyle = "#65FDFF";
			ctx.textAlign = "center";
			ctx.font = "16px emulogic";
			ctx.fillText("Inspired by Galaga,", 220, 65);
			ctx.fillText("produced by Namco in 1981.", 220, 85);
			ctx.fillText("Sounds from the Galaga", 220, 135);
			ctx.fillText("Album on the iTunes Store.", 220, 155);
			ctx.fillText("Special thanks to the", 220, 205);
			ctx.fillText("GITA program and to ", 220, 225);
			ctx.fillText("everyone who helped me", 220, 245);
			ctx.fillText("with this project.", 220, 265);
			ctx.fillText("Total Lines of Code:", 220, 315);
			ctx.fillText("3,513", 220, 340);
			ctx.fillText("Produced by Joshua Williams", 220, 380);
			ctx.fillText("GITA 2 Final Project", 220, 405);
			ctx.fillText("2016", 220, 430);
			
			ctx.textAlign = "left";
			ctx.font = "20px emulogic";
			ctx.fillText("Back", 180, 480);
			ctx.beginPath();
			ctx.moveTo(160,462);
			ctx.lineTo(172,472);
			ctx.lineTo(160,482);
			ctx.fill();
		}
	}
	
	function drawScoresScreen()
	{
		if (ratioScreen == true)
		{
			ctx.textAlign = "center";
			ctx.font = "16px emulogic";
			ctx.fillStyle = "red";
			ctx.fillText("- Results -", 220, 120);
			ctx.fillStyle = "#65FDFF";
			ctx.textAlign = "left";
			ctx.fillText("Shots Fired", 40, 170);
			ctx.textAlign = "right";
			ctx.fillText(shots, 400, 170);
			ctx.fillStyle = "white";
			ctx.textAlign = "left";
			ctx.fillText("Number of Hits", 40, 220);
			ctx.textAlign = "right";
			ctx.fillText(hits, 400, 220);
			ctx.fillStyle = "yellow";
			ctx.textAlign = "left";
			ctx.fillText("Hit-Miss Ratio", 40, 270);
			ctx.textAlign = "right";
			if (shots > 0)
			{
				var ratio = (hits / shots * 100).toFixed(1);
				ctx.fillText(ratio + "%", 400, 270);
			}
			else 
			{
				ctx.fillText("0.0%", 400, 270);
			}
			ctx.textAlign = "center";
			ctx.font = "16px emulogic";
			ctx.fillStyle = "#65FDFF";
			ctx.fillText("Thanks for playing!", 220, 390);
			setCookie("highscore", highscore, 365);
			setTimeout(function() {location.reload();}, 8000);
		}
	}
	
	function moveShip()
	{
		if (leftDown == true && moveAbility == true && rightDown == false)
		{
			if (shipX - shipDX > 0)
			{
				shipX -= shipDX;
				if (bulletFireOn1 == false)
				{
					bulletX1 -= shipDX;
				}
				if (bulletFireOn2 == false)
				{
					bulletX2 -= shipDX;
				}
			}
		}
		if (rightDown == true && moveAbility == true && leftDown == false)
		{
			if (shipX + shipDX + 30 < WIDTH)
			{
				shipX += shipDX;
				if (bulletFireOn1 == false)
				{
					bulletX1 += shipDX;
				}
				if (bulletFireOn2 == false)
				{
					bulletX2 += shipDX;
				}
			}
		}
	}
	
	function drawShip()
	{
		var img = document.getElementById(shipImage);
		ctx.drawImage(img, shipX, shipY);
	}
	
	function drawLives()
	{
		if (life1 == true)
		{
			var img = document.getElementById("life");
			ctx.drawImage(img, 5, 471);
		}
		if (life2 == true)
		{
			var img = document.getElementById("life");
			ctx.drawImage(img, 33, 471);
		}
		if (life3 == true)
		{
			var img = document.getElementById("life");
			ctx.drawImage(img, 61, 471);
		}
	}
	
	function drawLevel()
	{
		if (level >= 1 && level <= 4)
		{
			var img = document.getElementById("level1");
			ctx.drawImage(img, 424, 477);
			if (level >= 2)
			{
				ctx.drawImage(img, 408, 477);
			}
			if (level >= 3)
			{
				ctx.drawImage(img, 392, 477);
			}
			if (level == 4)
			{
				ctx.drawImage(img, 376, 477);
			}
		}
		else if (level >= 5 && level < 10)
		{
			var img = document.getElementById("level5");
			var level5x = 421 - (level - 5) * 16;
			ctx.drawImage(img, level5x, 467);
			
			img = document.getElementById("level1");
			if (level >= 6)
			{
				ctx.drawImage(img, 424, 477);
			}
			if (level >= 7)
			{
				ctx.drawImage(img, 408, 477);
			}
			if (level >= 8)
			{
				ctx.drawImage(img, 392, 477);
			}
			if (level == 9)
			{
				ctx.drawImage(img, 376, 477);
			}
		}
		else if (level >= 10 && level < 15)
		{
			var img = document.getElementById("level10");
			var level10x = 409 - (level - 10) * 16;
			ctx.drawImage(img, level10x, 467);
			
			img = document.getElementById("level1");
			if (level >= 11)
			{
				ctx.drawImage(img, 424, 477);
			}
			if (level >= 12)
			{
				ctx.drawImage(img, 408, 477);
			}
			if (level >= 13)
			{
				ctx.drawImage(img, 392, 477);
			}
			if (level == 14)
			{
				ctx.drawImage(img, 376, 477);
			}
		}
		else if (level >= 15 && level < 20)
		{
			var img = document.getElementById("level10");
			var level10x = 390 - (level - 15) * 16;
			ctx.drawImage(img, level10x, 467);
			
			img = document.getElementById("level5");
			var level5x = 421 - (level - 15) * 16;
			ctx.drawImage(img, level5x, 467);
			
			img = document.getElementById("level1");
			if (level >= 16)
			{
				ctx.drawImage(img, 424, 477);
			}
			if (level >= 17)
			{
				ctx.drawImage(img, 408, 477);
			}
			if (level >= 18)
			{
				ctx.drawImage(img, 392, 477);
			}
			if (level == 19)
			{
				ctx.drawImage(img, 376, 477);
			}
		}
		else
		{
			var img = document.getElementById("level20");
			ctx.drawImage(img, 405, 465);
		}
	}
	
	function drawBullet()
	{
		var img = document.getElementById("bulletShip");
		ctx.drawImage(img, bulletX1, bulletY1);
		ctx.drawImage(img, bulletX2, bulletY2);
	}
	
	function drawScores()
	{
		ctx.fillStyle = "red";
		ctx.font = "12px emulogic";
		ctx.textAlign = "center";
		ctx.fillText("1UP", 45, 20);
		ctx.fillText("High Score", 220, 20);
		ctx.fillStyle = "white";
		ctx.textAlign = "right";
		ctx.fillText(score, 82, 40);
		if (score > highscore)
		{
			highscore = score;
		}
		ctx.fillText(highscore, 255, 40);
	}
	
	function drawAlienBullet()
	{
		for (var i = 0; i < 3; i++)
		{
			var img = document.getElementById(alienBullets[i].image);
			ctx.drawImage(img, alienBullets[i].x, alienBullets[i].y);
		}
	}
	
	function drawAliens()
	{
		for (var i = 0; i < 20; i++)
		{
			var img = document.getElementById(alien1[i].image);
			if (alien1[i].hit == true)
			{
				ctx.globalCompositeOperation = "destination-over";
			}
			ctx.drawImage(img, alien1[i].x, alien1[i].y);
			ctx.globalCompositeOperation = "source-over";
		}
		for (var i = 0; i < 16; i++)
		{
			var img = document.getElementById(alien2[i].image);
			if (alien2[i].hit == true)
			{
				ctx.globalCompositeOperation = "destination-over";
			}
			ctx.drawImage(img, alien2[i].x, alien2[i].y);
			ctx.globalCompositeOperation = "source-over";
		}
		for (var i = 0; i < 4; i++)
		{
			var img = document.getElementById(alien3[i].image);
			if (alien3[i].hit == true)
			{
				ctx.globalCompositeOperation = "destination-over";
			}
			ctx.drawImage(img, alien3[i].x, alien3[i].y);
			ctx.globalCompositeOperation = "source-over";
		}
	}
	
	function drawReady()
	{
		ctx.fillStyle = "#65FDFF";
		ctx.font = "16px emulogic";
		ctx.textAlign = "center";
		ctx.fillText("Ready", 220, 260);
	}
	
	function drawGameOver()
	{
		ctx.fillStyle = "#65FDFF";
		ctx.font = "16px emulogic";
		ctx.textAlign = "center";
		ctx.fillText("Game Over", 220, 260);
	}
	
	function drawNextLevel()
	{
		ctx.fillStyle = "#65FDFF";
		ctx.font = "16px emulogic";
		ctx.textAlign = "center";
		ctx.fillText("Stage " + level, 220, 260);
	}
	
	function drawStart()
	{
		ctx.fillStyle = "#65FDFF";
		ctx.font = "16px emulogic";
		ctx.textAlign = "center";
		ctx.fillText("Start", 220, 260);
	}
	
// DRAW end
	
	
// TIMERS start
	
	function bulletTimer1()
	{
		if(bulletFireOn1 == true)
		{
			bulletTimerVar1 = window.setInterval("moveBullet1()", 5); 
		}
		else if(bulletFireOn1 == false)
		{
			window.clearInterval(bulletTimerVar1);
		}
	}
	
	function bulletTimer2()
	{
		if(bulletFireOn2 == true)
		{
			bulletTimerVar2 = window.setInterval("moveBullet2()", 5); 
		}
		else if(bulletFireOn2 == false)
		{
			window.clearInterval(bulletTimerVar2);
		}
	}
	
	function timerStartGame()
	{
		if(startGameOn == true)
		{
			startGameVar = window.setInterval("startGame()", 250);
		}
		else if(startGameOn == false)
		{
			window.clearInterval(startGameVar);
		}
	}
	
	function timerNextLevel()
	{
		if(nxtLvlOn == true)
		{
			nxtLvlVar = window.setInterval("nextLevel()", 500);
		}
		else if(nxtLvlOn == false)
		{
			window.clearInterval(nxtLvlVar);
		}
	}
	
	function timerAlienIdleMovement()
	{
		if(AIMon == true)
		{
			AIMvar = window.setInterval("alienIdleMovement()", 180); 
		}
		else if(AIMon == false)
		{
			window.clearInterval(AIMvar);
		}
	}
	
	function timerStartPos()
	{
		if(startPosOn == true)
		{
			startPosVar = window.setInterval("startPosMove()", startPosSpeed); 
		}
		else if(startPosOn == false)
		{
			window.clearInterval(startPosVar);
		}
	}
	
	function timerAlienExplode1()
	{
		if(alExpl1on == true)
		{
			alExpl1var = window.setInterval("alienExplode1()", 50); 
		}
		else if(alExpl1on == false)
		{
			window.clearInterval(alExpl1var);
		}
	}
	
	function timerAlienExplode2()
	{
		if(alExpl2on == true)
		{
			alExpl2var = window.setInterval("alienExplode2()", 50); 
		}
		else if(alExpl2on == false)
		{
			window.clearInterval(alExpl2var);
		}
	}
	
	function timerAlienExplode3()
	{
		if(alExpl3on == true)
		{
			alExpl3var = window.setInterval("alienExplode3()", 50); 
		}
		else if(alExpl3on == false)
		{
			window.clearInterval(alExpl3var);
		}
	}
	
	function timerAlien1move()
	{
		if(alMove1on == true)
		{
			alMove1var = window.setInterval("alien1move()", alienMoveSpeed); 
		}
		else if(alMove1on == false)
		{
			window.clearInterval(alMove1var);
		}
	}
	
	function timerAlien2move()
	{
		if(alMove2on == true)
		{
			alMove2var = window.setInterval("alien2move()", alienMoveSpeed); 
		}
		else if(alMove2on == false)
		{
			window.clearInterval(alMove2var);
		}
	}
	
	function timerAlien3move()
	{
		if(alMove3on == true)
		{
			alMove3var = window.setInterval("alien3move()", alienMoveSpeed); 
		}
		else if(alMove3on == false)
		{
			window.clearInterval(alMove3var);
		}
	}
	
	function timerAlienBullet1()
	{
		if(alienBullets[0].fired == true)
		{
			alienBullets[0].timerVar = window.setInterval("alien1bulletMove()", alienMoveSpeed); 
		}
		else if(alienBullets[0].fired == false)
		{
			window.clearInterval(alienBullets[0].timerVar);
		}
	}
	
	function timerAlienBullet2()
	{
		if(alienBullets[1].fired == true)
		{
			alienBullets[1].timerVar = window.setInterval("alien2bulletMove()", alienMoveSpeed); 
		}
		else if(alienBullets[1].fired == false)
		{
			window.clearInterval(alienBullets[1].timerVar);
		}
	}
	
	function timerAlienBullet3()
	{
		if(alienBullets[2].fired == true)
		{
			alienBullets[2].timerVar = window.setInterval("alien3bulletMove()", alienMoveSpeed); 
		}
		else if(alienBullets[2].fired == false)
		{
			window.clearInterval(alienBullets[2].timerVar);
		}
	}
	
	function timerShipExplode()
	{
		if(shipExplOn == true)
		{
			shipExplVar = window.setInterval("shipExplode()", 300); 
		}
		else if(shipExplOn == false)
		{
			window.clearInterval(shipExplVar);
		}
	}
	
// TIMERS end
	
// MOVEMENTS start
	
	function moveBullet1()
	{
		bulletY1 -= bulletDY;
		//check when off screen
		if(bulletY1 < -16)
		{
			bulletFireOn1 = false;
			bulletTimer1();
			bulletX1 = shipX + 12;
			bulletY1 = shipY;
		}
		
		for (var i = 0; i < 20; i++)
		{
			var rect1 = {x: alien1[i].x, y: alien1[i].y, width: 26, height: 20}
			var rect2 = {x: bulletX1, y: bulletY1, width: 6, height: 16}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien1[i].hit == false)
			{
				// collision detected
				alien1[i].hit = true;
				if (alExpl1on == false)
				{
					alienTypeExplode1 = 1;
					whichAlienExplode1 = i;
					alExpl1on = true;
					timerAlienExplode1();
				}
				else if (alExpl2on == false)
				{
					alienTypeExplode2 = 1;
					whichAlienExplode2 = i;
					alExpl2on = true;
					timerAlienExplode2();
				}
				else if (alExpl3on == false)
				{
					alienTypeExplode3 = 1;
					whichAlienExplode3 = i;
					alExpl3on = true;
					timerAlienExplode3();
				}
				
				var sound = document.getElementById("alien1hit"); 
				sound.pause();
				sound.currentTime = 0;
				sound.play();
				
				bulletFireOn1 = false;
				bulletTimer1();
				bulletX1 = shipX + 12;
				bulletY1 = shipY;
				
				alien1hits += 1;
				score += alien1score;
				hits += 1;
			}
		}
		for (var i = 0; i < 16; i++)
		{
			var rect1 = {x: alien2[i].x, y: alien2[i].y, width: 26, height: 20}
			var rect2 = {x: bulletX1, y: bulletY1, width: 6, height: 16}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien2[i].hit == false)
			{
				// collision detected
				alien2[i].hit = true;
				if (alExpl1on == false)
				{
					alienTypeExplode1 = 2;
					whichAlienExplode1 = i;
					alExpl1on = true;
					timerAlienExplode1();
				}
				else if (alExpl2on == false)
				{
					alienTypeExplode2 = 2;
					whichAlienExplode2 = i;
					alExpl2on = true;
					timerAlienExplode2();
				}
				else if (alExpl3on == false)
				{
					alienTypeExplode3 = 2;
					whichAlienExplode3 = i;
					alExpl3on = true;
					timerAlienExplode3();
				}
				
				var sound = document.getElementById("alien2hit"); 
				sound.pause();
				sound.currentTime = 0;
				sound.play();
				
				bulletFireOn1 = false;
				bulletTimer1();
				bulletX1 = shipX + 12;
				bulletY1 = shipY;
							
				alien2hits += 1;
				score += alien2score;
				hits += 1;
			}
		}
		for (var i = 0; i < 4; i++)
		{
			var rect1 = {x: alien3[i].x, y: alien3[i].y, width: 26, height: 20}
			var rect2 = {x: bulletX1, y: bulletY1, width: 6, height: 16}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien3[i].hit == false)
			{
				// collision detected
				if (alien3[i].hits == 0)
				{
					alien3[i].hits += 1;
					if (alien3[i].image == "alien3v1up")
					{
						alien3[i].image = "alien3v3up";
					}
					else if (alien3[i].image == "alien3v2up")
					{
						alien3[i].image = "alien3v4up";
					}
					else if (alien3[i].image == "alien3v2down")
					{
						alien3[i].image = "alien3v4down";
					}
					else if (alien3[i].image == "alien3v1down")
					{
						alien3[i].image = "alien3v3down";
					}
					
					var sound = document.getElementById("alien3hit1"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
					
					hits += 1;
				}
				else if (alien3[i].hits == 1)
				{
					alien3[i].hit = true;
					if (alExpl1on == false)
					{
						alienTypeExplode1 = 3;
						whichAlienExplode1 = i;
						alExpl1on = true;
						timerAlienExplode1();
					}
					else if (alExpl2on == false)
					{
						alienTypeExplode2 = 3;
						whichAlienExplode2 = i;
						alExpl2on = true;
						timerAlienExplode2();
					}
					else if (alExpl3on == false)
					{
						alienTypeExplode3 = 3;
						whichAlienExplode3 = i;
						alExpl3on = true;
						timerAlienExplode3();
					}
					
					var sound = document.getElementById("alien3hit2"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
					
					alien3hits += 1;
					score += alien3score;
					hits += 1;
				}
				
				bulletFireOn1 = false;
				bulletTimer1();
				bulletX1 = shipX + 12;
				bulletY1 = shipY;
			}
		}
	}
	
	function moveBullet2()
	{
		bulletY2 -= bulletDY;
		//check when off screen
		if(bulletY2 < -16)
		{
			bulletFireOn2 = false;
			bulletTimer2();
			bulletX2 = shipX + 12;
			bulletY2 = shipY;
		}
		
		for (var i = 0; i < 20; i++)
		{
			var rect1 = {x: alien1[i].x, y: alien1[i].y, width: 26, height: 20}
			var rect2 = {x: bulletX2, y: bulletY2, width: 6, height: 16}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien1[i].hit == false)
			{
				// collision detected
				alien1[i].hit = true;
				if (alExpl1on == false)
				{
					alienTypeExplode1 = 1;
					whichAlienExplode1 = i;
					alExpl1on = true;
					timerAlienExplode1();
				}
				else if (alExpl2on == false)
				{
					alienTypeExplode2 = 1;
					whichAlienExplode2 = i;
					alExpl2on = true;
					timerAlienExplode2();
				}
				else if (alExpl3on == false)
				{
					alienTypeExplode3 = 1;
					whichAlienExplode3 = i;
					alExpl3on = true;
					timerAlienExplode3();
				}
				
				var sound = document.getElementById("alien1hit"); 
				sound.pause();
				sound.currentTime = 0;
				sound.play();
				
				bulletFireOn2 = false;
				bulletTimer2();
				bulletX2 = shipX + 12;
				bulletY2 = shipY;
				
				alien1hits += 1;
				score += alien1score;
				hits += 1;
			}
		}
		for (var i = 0; i < 16; i++)
		{
			var rect1 = {x: alien2[i].x, y: alien2[i].y, width: 26, height: 20}
			var rect2 = {x: bulletX2, y: bulletY2, width: 6, height: 16}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien2[i].hit == false)
			{
				// collision detected
				alien2[i].hit = true;
				if (alExpl1on == false)
				{
					alienTypeExplode1 = 2;
					whichAlienExplode1 = i;
					alExpl1on = true;
					timerAlienExplode1();
				}
				else if (alExpl2on == false)
				{
					alienTypeExplode2 = 2;
					whichAlienExplode2 = i;
					alExpl2on = true;
					timerAlienExplode2();
				}
				else if (alExpl3on == false)
				{
					alienTypeExplode3 = 2;
					whichAlienExplode3 = i;
					alExpl3on = true;
					timerAlienExplode3();
				}
				
				var sound = document.getElementById("alien2hit"); 
				sound.pause();
				sound.currentTime = 0;
				sound.play();
				
				bulletFireOn2 = false;
				bulletTimer2();
				bulletX2 = shipX + 12;
				bulletY2 = shipY;
				
				alien2hits += 1;
				score += alien2score;
				hits += 1;
			}
		}
		for (var i = 0; i < 4; i++)
		{
			var rect1 = {x: alien3[i].x, y: alien3[i].y, width: 26, height: 20}
			var rect2 = {x: bulletX2, y: bulletY2, width: 6, height: 16}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien3[i].hit == false)
			{
				// collision detected
				if (alien3[i].hits == 0)
				{
					alien3[i].hits += 1;
					if (alien3[i].image == "alien3v1up")
					{
						alien3[i].image = "alien3v3up";
					}
					else if (alien3[i].image == "alien3v2up")
					{
						alien3[i].image = "alien3v4up";
					}
					else if (alien3[i].image == "alien3v2down")
					{
						alien3[i].image = "alien3v4down";
					}
					else if (alien3[i].image == "alien3v1down")
					{
						alien3[i].image = "alien3v3down";
					}
					
					var sound = document.getElementById("alien3hit1"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
					
					hits += 1;
				}
				else if (alien3[i].hits == 1)
				{
					alien3[i].hit = true;
					if (alExpl1on == false)
					{
						alienTypeExplode1 = 3;
						whichAlienExplode1 = i;
						alExpl1on = true;
						timerAlienExplode1();
					}
					else if (alExpl2on == false)
					{
						alienTypeExplode2 = 3;
						whichAlienExplode2 = i;
						alExpl2on = true;
						timerAlienExplode2();
					}
					else if (alExpl3on == false)
					{
						alienTypeExplode3 = 3;
						whichAlienExplode3 = i;
						alExpl3on = true;
						timerAlienExplode3();
					}
					
					var sound = document.getElementById("alien3hit2"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
					
					alien3hits += 1;
					score += alien3score;
					hits += 1;
				}
				
				bulletFireOn2 = false;
				bulletTimer2();
				bulletX2 = shipX + 12;
				bulletY2 = shipY;
			}
		}
	}
	
	function startGame()
	{
		startGameTracker += 1;
		if (startGameTracker == 5)
		{
			drawStartVar = true;
			var sound = document.getElementById("startMusic"); 
			sound.pause();
			sound.currentTime = 0;
			sound.play();
		}
		else if (startGameTracker == 19)
		{
			drawStartVar = false;
			drawNextLevelVar = true;
		}
		else if (startGameTracker == 26)
		{
			shipX = 205;
			shipY = 430;
			moveAbility = true;
			bulletX1 = 217;
			bulletY1 = 430;
			bulletX2 = 217;
			bulletY2 = 430;
			life3 = false;
		}
		else if (startGameTracker == 34)
		{
			drawNextLevelVar = false;
			fireAbility = true;
			startPosOn = true;
			timerStartPos();
		}
	}
	
	function nextLevel()
	{
		nextLevelTracker += 1;
		
		if (shipExplOn == true)
		{
			nextLevelTracker = 0;
		}
		
		if (nextLevelTracker == 2)
		{
			level += 1;
			drawNextLevelVar = true;
			
			var sound = document.getElementById("nextLevel"); 
			sound.pause();
			sound.currentTime = 0;
			sound.play();
			
			if (level == 2)
			{
				startPosSpeed -= 10;
				alienMoveSpeed -= 6;
			}
			else if (level == 3)
			{
				startPosSpeed += 10;
				alienMoveSpeed += 6;
				alienBullets[0].fireAbility = true;
			}
			else if (level == 4)
			{
				alienBullets[1].fireAbility = true;
			}
			else if (level == 5)
			{
				alienBullets[2].fireAbility = true;
			}
			else if (level >= 6)
			{				
				if (startPosSpeed > 20)
				{
					startPosSpeed -= 5;
				}
			
				if (alienMoveSpeed > 8)
				{
					alienMoveSpeed -= 3;
				}
				
				if (level == 10 || level == 15)
				{
					shipDX += 1;
				}
			}
		}
		else if (nextLevelTracker == 5)
		{
			drawNextLevelVar = false;
			nxtLvlOn = false;
			timerNextLevel();
			nextLevelTracker = 0;
			startPosOn = true;
			timerStartPos();
		}
	}
	
	function alienIdleMovement()
	{
		AIMtracker += 1;
		
		if (alien1hits == 20 && alien2hits == 16 && alien3hits == 4 && 
				alExpl1on == false && alExpl2on == false && alExpl3on == false && shipExplOn == false)
		{
			for (var i = 0; i < 20; i++)
			{
				alien1[i].hit = false;
				alien1[i].moving = false;
				alien1[i].image = "alien1v1down";
			}
			for (var i = 0; i < 16; i++)
			{
				alien2[i].hit = false;
				alien2[i].moving = false;
				alien2[i].image = "alien2v1down";
			}
			for (var i = 0; i < 4; i++)
			{
				alien3[i].hit = false;
				alien3[i].moving = false;
				alien3[i].hits = 0;
				alien3[i].image = "alien3v1down";
			}
			
			alien1hits = 0;
			alien2hits = 0;
			alien3hits = 0;
			
			alMove1on = false;
			timerAlien1move();
			alien1moveTracker = 0;
			alien1return = false;
			
			alMove2on = false;
			timerAlien2move();
			alien2moveTracker = 0;
			alien2return = false;
			
			alMove3on = false;
			timerAlien3move();
			alien3moveTracker = 0;
			alien3return = false;
			
			AIMtracker = 0;
			AIMon = false;
			timerAlienIdleMovement();
			nxtLvlOn = true;
			timerNextLevel();
		}
		
		for (var i = 0; i < 20; i++)
		{
			if (alien1[i].hit == false)
			{
				if (AIMtracker <= 12)
				{
					//out
					if (i < 5)
					{
						if (alien1[i].moving == false)
						{
							alien1[i].x -= 5 - i;
							alien1[i].y += 3;
						}
						else if (alien1[i].moving == true)
						{
							alien1[i].initialX -= 5 - i;
							alien1[i].initialY += 3;
						}
					}
					else if (i < 10)
					{
						if (alien1[i].moving == false)
						{
							alien1[i].x += i - 4;
							alien1[i].y += 3;
						}
						else if (alien1[i].moving == true)
						{
							alien1[i].initialX += i - 4;
							alien1[i].initialY += 3;
						}
					}
					else if (i < 15)
					{
						if (alien1[i].moving == false)
						{
							alien1[i].x -= 5 - (i - 10);
							alien1[i].y += 4;
						}
						else if (alien1[i].moving == true)
						{
							alien1[i].initialX -= 5 - (i - 10);
							alien1[i].initialY += 4;
						}
					}
					else
					{
						if (alien1[i].moving == false)
						{
							alien1[i].x += (i - 10) - 4;
							alien1[i].y += 4;
						}
						else if (alien1[i].moving == true)
						{
							alien1[i].initialX += (i - 10) - 4;
							alien1[i].initialY += 4;
						}
					}
				}
				else
				{
					//in
					if (i < 5)
					{
						if (alien1[i].moving == false)
						{
							alien1[i].x += 5 - i;
							alien1[i].y -= 3;
						}
						else if (alien1[i].moving == true)
						{
							alien1[i].initialX += 5 - i;
							alien1[i].initialY -= 3;
						}
					}
					else if (i < 10)
					{
						if (alien1[i].moving == false)
						{
							alien1[i].x -= i - 4;
							alien1[i].y -= 3;
						}
						else if (alien1[i].moving == true)
						{
							alien1[i].initialX -= i - 4;
							alien1[i].initialY -= 3;
						}
					}
					else if (i < 15)
					{
						if (alien1[i].moving == false)
						{
							alien1[i].x += 5 - (i - 10);
							alien1[i].y -= 4;
						}
						else if (alien1[i].moving == true)
						{
							alien1[i].initialX += 5 - (i - 10);
							alien1[i].initialY -= 4;
						}
					}
					else
					{
						if (alien1[i].moving == false)
						{
							alien1[i].x -= (i - 10) - 4;
							alien1[i].y -= 4;
						}
						else if (alien1[i].moving == true)
						{
							alien1[i].initialX -= (i - 10) - 4;
							alien1[i].initialY -= 4;
						}
					}
				}
		
				if (AIMtracker % 2 == 0)
				{
					if (alien1[i].image == "alien1v1up")
					{
						alien1[i].image = "alien1v2up";
					}
					else if (alien1[i].moving == false)
					{
						alien1[i].image = "alien1v1up";
					}
					else if (alien1[i].moving == true && alien1[i].image == "alien1v1down")
					{
						alien1[i].image = "alien1v2down";
						alien1[i].initialImage = "alien1v2up";
					}
					else if (alien1[i].moving == true)
					{
						alien1[i].image = "alien1v1down";
						alien1[i].initialImage = "alien1v1up";
					}
				}
			}
		}
		for (var i = 0; i < 16; i++)
		{
			if (alien2[i].hit == false)
			{
				if (AIMtracker <= 12)
				{
					//out
					if (i < 4)
					{
						if (alien2[i].moving == false)
						{
							alien2[i].x -= 4 - i;
							alien2[i].y += 1;
						}
						else if (alien2[i].moving == true)
						{
							alien2[i].initialX -= 4 - i;
							alien2[i].initialY += 1;
						}
					}
					else if (i < 8)
					{
						if (alien2[i].moving == false)
						{
							alien2[i].x += i - 3;
							alien2[i].y += 1;
						}
						else if (alien2[i].moving == true)
						{
							alien2[i].initialX += i - 3;
							alien2[i].initialY += 1;
						}
					}
					else if (i < 12)
					{
						if (alien2[i].moving == false)
						{
							alien2[i].x -= 4 - (i - 8);
							alien2[i].y += 2;
						}
						else if (alien2[i].moving == true)
						{
							alien2[i].initialX -= 4 - (i - 8);
							alien2[i].initialY += 2;
						}
					}
					else
					{
						if (alien2[i].moving == false)
						{
							alien2[i].x += (i - 8) - 3;
							alien2[i].y += 2;
						}
						else if (alien2[i].moving == true)
						{
							alien2[i].initialX += (i - 8) - 3;
							alien2[i].initialY += 2;
						}
					}
				}
				else
				{
					//in
					if (i < 4)
					{
						if (alien2[i].moving == false)
						{
							alien2[i].x += 4 - i;
							alien2[i].y -= 1;
						}
						else if (alien2[i].moving == true)
						{
							alien2[i].initialX += 4 - i;
							alien2[i].initialY -= 1;
						}
					}
					else if (i < 8)
					{
						if (alien2[i].moving == false)
						{
							alien2[i].x -= i - 3;
							alien2[i].y -= 1;
						}
						else if (alien2[i].moving == true)
						{
							alien2[i].initialX -= i - 3;
							alien2[i].initialY -= 1;
						}
					}
					else if (i < 12)
					{
						if (alien2[i].moving == false)
						{
							alien2[i].x += 4 - (i - 8);
							alien2[i].y -= 2;
						}
						else if (alien2[i].moving == true)
						{
							alien2[i].initialX += 4 - (i - 8);
							alien2[i].initialY -= 2;
						}
					}
					else
					{
						if (alien2[i].moving == false)
						{
							alien2[i].x -= (i - 8) - 3;
							alien2[i].y -= 2;
						}
						else if (alien2[i].moving == true)
						{
							alien2[i].initialX -= (i - 8) - 3;
							alien2[i].initialY -= 2;
						}
					}
				}
				
				if (AIMtracker % 2 == 0)
				{
					if (alien2[i].image == "alien2v1up")
					{
						alien2[i].image = "alien2v2up";
					}
					else if (alien2[i].moving == false)
					{
						alien2[i].image = "alien2v1up";
					}
					else if (alien2[i].moving == true && alien2[i].image == "alien2v1down")
					{
						alien2[i].image = "alien2v2down";
						alien2[i].initialImage = "alien2v2up";
					}
					else if (alien2[i].moving == true)
					{
						alien2[i].image = "alien2v1down";
						alien2[i].initialImage = "alien2v1up";
					}
				}
			}
		}
		for (var i = 0; i < 4; i++)
		{
			if (alien3[i].hit == false)
			{
				if (AIMtracker <= 12)
				{
					//out
					if (i < 2)
					{
						if (alien3[i].moving == false)
						{
							alien3[i].x -= 2 - i;
						}
						else if (alien3[i].moving == true)
						{
							alien3[i].initialX -= 2 - i;
						}
					}
					else
					{
						if (alien3[i].moving == false)
						{
							alien3[i].x += i - 1;
						}
						else if (alien3[i].moving == true)
						{
							alien3[i].initialX += i - 1;
						}
					}
				}
				else
				{
					//in
					if (i < 2)
					{
						if (alien3[i].moving == false)
						{
							alien3[i].x += 2 - i;
						}
						else if (alien3[i].moving == true)
						{
							alien3[i].initialX += 2 - i;
						}
					}
					else
					{
						if (alien3[i].moving == false)
						{
							alien3[i].x -= i - 1;
						}
						else if (alien3[i].moving == true)
						{
							alien3[i].initialX -= i - 1;
						}
					}
				}
				
				if (AIMtracker % 2 == 0)
				{
					if (alien3[i].image == "alien3v1up")
					{
						alien3[i].image = "alien3v2up";
					}
					else if (alien3[i].image == "alien3v2up")
					{
						alien3[i].image = "alien3v1up";
					}
					else if (alien3[i].image == "alien3v3up")
					{
						alien3[i].image = "alien3v4up";
					}
					else if (alien3[i].image == "alien3v4up")
					{
						alien3[i].image = "alien3v3up";
					}
					else if (alien3[i].image == "alien3v1down")
					{
						alien3[i].image = "alien3v2down";
						alien3[i].initialImage = "alien3v2up";
					}
					else if (alien3[i].image == "alien3v2down")
					{
						alien3[i].image = "alien3v1down";
						alien3[i].initialImage = "alien3v1up";
					}
					else if (alien3[i].image == "alien3v3down")
					{
						alien3[i].image = "alien3v4down";
						alien3[i].initialImage = "alien3v4up";
					}
					else if (alien3[i].image == "alien3v4down")
					{
						alien3[i].image = "alien3v3down";
						alien3[i].initialImage = "alien3v3up";
					}
				}
			}
		}
		
		if (AIMtracker == 1)
		{
			var sound = document.getElementById("ambience"); 
			sound.pause();
			sound.currentTime = 0;
			sound.play();
		}
		else if (AIMtracker == 24)
		{
			AIMtracker = 0;
		}
	}
	
	function startPosMove()
	{
		startPosTracker += 1;
		
		if (startPosTracker == 1)
		{
			for (var i = 0; i < 20; i++)
			{
				if (i < 10)
				{
					alien1[i].x = 72 + i * 30;
				}
				else
				{
					alien1[i].x = 72 + (i - 10) * 30;
				}
				
				if (i < 10)
				{
					alien1[i].y = -66;
				}
				else
				{
					alien1[i].y = -42;
				}
			}
			for (var i = 0; i < 16; i++)
			{
				if (i < 8)
				{
					alien2[i].x = 102 + i * 30;
				}
				else
				{
					alien2[i].x = 102 + (i - 8) * 30;
				}
				
				if (i < 8)
				{
					alien2[i].y = -114;
				}			
				else
				{
					alien2[i].y = -90;
				}
			}
			for (var i = 0; i < 4; i++)
			{
				alien3[i].x = 152 + i * 34;
			
				alien3[i].y = -150;
			}
		}
		
		for (var i = 0; i < 20; i++)
		{
			if (alien1[i].hit == false)
			{
				alien1[i].y += 5;
				if (startPosTracker % 4 == 0)
				{
					if (alien1[i].image == "alien1v1down")
					{
						alien1[i].image = "alien1v2down";
					}
					else
					{
						alien1[i].image = "alien1v1down";
					}
				}
			}
			if (i < 16 && alien2[i].hit == false)
			{
				alien2[i].y += 5;
				if (startPosTracker % 4 == 0)
				{
					if (alien2[i].image == "alien2v1down")
					{
						alien2[i].image = "alien2v2down";
					}
					else
					{
						alien2[i].image = "alien2v1down";
					}
				}
			}
			
			if (i < 4 && alien3[i].hit == false)
			{
				alien3[i].y += 5;
				if (startPosTracker % 4 == 0)
				{
					if (alien3[i].image == "alien3v1down")
					{
						alien3[i].image = "alien3v2down";
					}
					else
					{
						alien3[i].image = "alien3v1down";
					}
				}
			}
		}
			
		if (alien3[0].y == 50 || alien3[1].y == 50 || alien3[2].y == 50 || alien3[3].y == 50)
		{
			for (i = 0; i < 4; i++)
			{
				alien3[i].image = "alien3v1up";
			}
			startPosTracker = 0;
			startPosOn = false;
			timerStartPos();
			AIMon = true;
			timerAlienIdleMovement();
			alMove1on = true;
			timerAlien1move();
			alMove2on = true;
			timerAlien2move();
			alMove3on = true;
			timerAlien3move();
		}
	}
	
	function alienExplode1()
	{
		explodeTracker1 += 1;
		
		if (explodeTracker1 == 1)
		{
			if (alienTypeExplode1 == 1)
			{
				alien1[whichAlienExplode1].image = "alienExplode1";
				alien1[whichAlienExplode1].x -= 18;
				alien1[whichAlienExplode1].y -= 22;
			}
			else if (alienTypeExplode1 == 2)
			{
				alien2[whichAlienExplode1].image = "alienExplode1";
				alien2[whichAlienExplode1].x -= 18;
				alien2[whichAlienExplode1].y -= 22;
			}
			else if (alienTypeExplode1 == 3)
			{
				alien3[whichAlienExplode1].image = "alienExplode1";
				alien3[whichAlienExplode1].x -= 16;
				alien3[whichAlienExplode1].y -= 16;
			}
		}
		else if (explodeTracker1 == 2)
		{
			if (alienTypeExplode1 == 1)
			{
				alien1[whichAlienExplode1].image = "alienExplode2";
			}
			else if (alienTypeExplode1 == 2)
			{
				alien2[whichAlienExplode1].image = "alienExplode2";
			}
			else if (alienTypeExplode1 == 3)
			{
				alien3[whichAlienExplode1].image = "alienExplode2";
			}
		}
		else if (explodeTracker1 == 3)
		{
			if (alienTypeExplode1 == 1)
			{
				alien1[whichAlienExplode1].image = "alienExplode3";
			}
			else if (alienTypeExplode1 == 2)
			{
				alien2[whichAlienExplode1].image = "alienExplode3";
			}
			else if (alienTypeExplode1 == 3)
			{
				alien3[whichAlienExplode1].image = "alienExplode3";
			}
		}
		else if (explodeTracker1 == 4)
		{
			if (alienTypeExplode1 == 1)
			{
				alien1[whichAlienExplode1].image = "alienExplode4";
			}
			else if (alienTypeExplode1 == 2)
			{
				alien2[whichAlienExplode1].image = "alienExplode4";
			}
			else if (alienTypeExplode1 == 3)
			{
				alien3[whichAlienExplode1].image = "alienExplode4";
			}
		}
		else if (explodeTracker1 == 5)
		{
			if (alienTypeExplode1 == 1)
			{
				alien1[whichAlienExplode1].image = "alienExplode5";
			}
			else if (alienTypeExplode1 == 2)
			{
				alien2[whichAlienExplode1].image = "alienExplode5";
			}
			else if (alienTypeExplode1 == 3)
			{
				alien3[whichAlienExplode1].image = "alienExplode5";
			}
		}
		else if (explodeTracker1 == 6)
		{
			if (alienTypeExplode1 == 1)
			{
				alien1[whichAlienExplode1].y = -200;
			}
			else if (alienTypeExplode1 == 2)
			{
				alien2[whichAlienExplode1].y = -200;
			}
			else if (alienTypeExplode1 == 3)
			{
				alien3[whichAlienExplode1].y = -200;
			}
			explodeTracker1 = 0;
			whichAlienExplode1 = 0;
			alienTypeExplode1 = 0;
			alExpl1on = false;
			timerAlienExplode1();
		}
	}
	
	function alienExplode2()
	{
		explodeTracker2 += 1;
		
		if (explodeTracker2 == 1)
		{
			if (alienTypeExplode2 == 1)
			{
				alien1[whichAlienExplode2].image = "alienExplode1";
				alien1[whichAlienExplode2].x -= 18;
				alien1[whichAlienExplode2].y -= 22;
			}
			else if (alienTypeExplode2 == 2)
			{
				alien2[whichAlienExplode2].image = "alienExplode1";
				alien2[whichAlienExplode2].x -= 18;
				alien2[whichAlienExplode2].y -= 22;
			}
			else if (alienTypeExplode2 == 3)
			{
				alien3[whichAlienExplode2].image = "alienExplode1";
				alien3[whichAlienExplode2].x -= 16;
				alien3[whichAlienExplode2].y -= 16;
			}
		}
		else if (explodeTracker2 == 2)
		{
			if (alienTypeExplode2 == 1)
			{
				alien1[whichAlienExplode2].image = "alienExplode2";
			}
			else if (alienTypeExplode2 == 2)
			{
				alien2[whichAlienExplode2].image = "alienExplode2";
			}
			else if (alienTypeExplode2 == 3)
			{
				alien3[whichAlienExplode2].image = "alienExplode2";
			}
		}
		else if (explodeTracker2 == 3)
		{
			if (alienTypeExplode2 == 1)
			{
				alien1[whichAlienExplode2].image = "alienExplode3";
			}
			else if (alienTypeExplode2 == 2)
			{
				alien2[whichAlienExplode2].image = "alienExplode3";
			}
			else if (alienTypeExplode2 == 3)
			{
				alien3[whichAlienExplode2].image = "alienExplode3";
			}
		}
		else if (explodeTracker2 == 4)
		{
			if (alienTypeExplode2 == 1)
			{
				alien1[whichAlienExplode2].image = "alienExplode4";
			}
			else if (alienTypeExplode2 == 2)
			{
				alien2[whichAlienExplode2].image = "alienExplode4";
			}
			else if (alienTypeExplode2 == 3)
			{
				alien3[whichAlienExplode2].image = "alienExplode4";
			}
		}
		else if (explodeTracker2 == 5)
		{
			if (alienTypeExplode2 == 1)
			{
				alien1[whichAlienExplode2].image = "alienExplode5";
			}
			else if (alienTypeExplode2 == 2)
			{
				alien2[whichAlienExplode2].image = "alienExplode5";
			}
			else if (alienTypeExplode2 == 3)
			{
				alien3[whichAlienExplode2].image = "alienExplode5";
			}
		}
		else if (explodeTracker2 == 6)
		{
			if (alienTypeExplode2 == 1)
			{
				alien1[whichAlienExplode2].y = -200;
			}
			else if (alienTypeExplode2 == 2)
			{
				alien2[whichAlienExplode2].y = -200;
			}
			else if (alienTypeExplode2 == 3)
			{
				alien3[whichAlienExplode2].y = -200;
			}
			explodeTracker2 = 0;
			whichAlienExplode2 = 0;
			alienTypeExplode2 = 0;
			alExpl2on = false;
			timerAlienExplode2();
		}
	}
	
	function alienExplode3()
	{
		explodeTracker3 += 1;
		
		if (explodeTracker3 == 1)
		{
			if (alienTypeExplode3 == 1)
			{
				alien1[whichAlienExplode3].image = "alienExplode1";
				alien1[whichAlienExplode3].x -= 18;
				alien1[whichAlienExplode3].y -= 22;
			}
			else if (alienTypeExplode3 == 2)
			{
				alien2[whichAlienExplode3].image = "alienExplode1";
				alien2[whichAlienExplode3].x -= 18;
				alien2[whichAlienExplode3].y -= 22;
			}
			else if (alienTypeExplode3 == 3)
			{
				alien3[whichAlienExplode3].image = "alienExplode1";
				alien3[whichAlienExplode3].x -= 16;
				alien3[whichAlienExplode3].y -= 16;
			}
		}
		else if (explodeTracker3 == 2)
		{
			if (alienTypeExplode3 == 1)
			{
				alien1[whichAlienExplode3].image = "alienExplode2";
			}
			else if (alienTypeExplode3 == 2)
			{
				alien2[whichAlienExplode3].image = "alienExplode2";
			}
			else if (alienTypeExplode3 == 3)
			{
				alien3[whichAlienExplode3].image = "alienExplode2";
			}
		}
		else if (explodeTracker3 == 3)
		{
			if (alienTypeExplode3 == 1)
			{
				alien1[whichAlienExplode3].image = "alienExplode3";
			}
			else if (alienTypeExplode3 == 2)
			{
				alien2[whichAlienExplode3].image = "alienExplode3";
			}
			else if (alienTypeExplode3 == 3)
			{
				alien3[whichAlienExplode3].image = "alienExplode3";
			}
		}
		else if (explodeTracker3 == 4)
		{
			if (alienTypeExplode3 == 1)
			{
				alien1[whichAlienExplode3].image = "alienExplode4";
			}
			else if (alienTypeExplode3 == 2)
			{
				alien2[whichAlienExplode3].image = "alienExplode4";
			}
			else if (alienTypeExplode3 == 3)
			{
				alien3[whichAlienExplode3].image = "alienExplode4";
			}
		}
		else if (explodeTracker3 == 5)
		{
			if (alienTypeExplode3 == 1)
			{
				alien1[whichAlienExplode3].image = "alienExplode5";
			}
			else if (alienTypeExplode3 == 2)
			{
				alien2[whichAlienExplode3].image = "alienExplode5";
			}
			else if (alienTypeExplode3 == 3)
			{
				alien3[whichAlienExplode3].image = "alienExplode5";
			}
		}
		else if (explodeTracker3 == 6)
		{
			if (alienTypeExplode3 == 1)
			{
				alien1[whichAlienExplode3].y = -200;
			}
			else if (alienTypeExplode3 == 2)
			{
				alien2[whichAlienExplode3].y = -200;
			}
			else if (alienTypeExplode3 == 3)
			{
				alien3[whichAlienExplode3].y = -200;
			}
			explodeTracker3 = 0;
			whichAlienExplode3 = 0;
			alienTypeExplode3 = 0;
			alExpl3on = false;
			timerAlienExplode3();
		}
	}
	
	function alien1move()
	{
		alien1moveTracker += 1;
		
		if (alien1hits == 20)
		{
			whichAlien1move = 20;
			alien1moveTracker = 0;
			alien1return = false;
			alMove1on = false;
			timerAlien1move();
		}
		
		if (alien1moveTracker == 30)
		{
			for (n = 0; n < 100; n++)
			{
				var pick = Math.floor(Math.random() * 20) * 1;
				if (AIMon == true && alien1[pick].hit == false)
				{
					n = 100;
					whichAlien1move = pick;
					alien1[whichAlien1move].moving = true;
					alien1[whichAlien1move].initialX = alien1[whichAlien1move].x;
					alien1[whichAlien1move].initialY = alien1[whichAlien1move].y;
					alien1[whichAlien1move].initialImage = alien1[whichAlien1move].image;
					alien1targetX = shipX + 2;
					if (alien1[whichAlien1move].image == "alien1v1up")
					{
							alien1[whichAlien1move].image = "alien1v1down";
					}
					else if (alien1[whichAlien1move].image == "alien1v2up")
					{
							alien1[whichAlien1move].image = "alien1v2down";
					}
					
					var sound = document.getElementById("alienFlying"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
				}
			}
		}
		else if (alien1moveTracker > 30)
		{
			if (alien1[whichAlien1move].hit == true)
			{
				whichAlien1move = 20;
				alien1moveTracker = 0;
				alien1return = false;
			}
			
			alien1[whichAlien1move].y += 4;
			if (alien1[whichAlien1move].x - alien1targetX > 1)
			{
				alien1[whichAlien1move].x -= 3;
			}
			else if (alien1[whichAlien1move].x - alien1targetX < -1)
			{
				alien1[whichAlien1move].x += 3;
			}
			
			if (alien1[whichAlien1move].y > 250 && alienBullets[0].fired == false && alienBullets[0].fireAbility == true)
			{
				alienBullets[0].fired = true;
				alienBullets[0].x = alien1[whichAlien1move].x + 10;
				alienBullets[0].y = alien1[whichAlien1move].y + 4;
				alienBullets[0].targetX = shipX + 12;
				alienBullets[0].DX = (alienBullets[0].x - alienBullets[0].targetX) / 22;
				if (alienBullets[0].DX >= 6)
				{
					alienBullets[0].DX = 6;
					
				}
				else if (alienBullets[0].DX <= -6)
				{
					alienBullets[0].DX = -6;
					
				}
				timerAlienBullet1();
			}
			
			var rect1 = {x: alien1[whichAlien1move].x, y: alien1[whichAlien1move].y, width: 26, height: 20}
			var rect2 = {x: shipX, y: shipY, width: 30, height: 32}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien1[whichAlien1move].hit == false)
			{
				// collision detected
				alien1[whichAlien1move].hit = true;
				if (alExpl1on == false)
				{
					alienTypeExplode1 = 1;
					whichAlienExplode1 = whichAlien1move;
					alExpl1on = true;
					timerAlienExplode1();
				}
				else if (alExpl2on == false)
				{
					alienTypeExplode2 = 1;
					whichAlienExplode2 = whichAlien1move;
					alExpl2on = true;
					timerAlienExplode2();
				}
				else if (alExpl3on == false)
				{
					alienTypeExplode3 = 1;
					whichAlienExplode3 = whichAlien1move;
					alExpl3on = true;
					timerAlienExplode3();
				}
				
				alien1hits += 1;
				score += alien1score;
				
				whichAlien1move = 20;
				alien1moveTracker = 0;
				alien1return = false;
				alMove1on = false;
				timerAlien1move();
				
				if (whichAlien2move != 20)
				{
					alien2[whichAlien2move].x = alien2[whichAlien2move].initialX;
					alien2[whichAlien2move].y = alien2[whichAlien2move].initialY;
					alien2[whichAlien2move].image = alien2[whichAlien2move].initialImage;
					alien2[whichAlien2move].moving = false;
				}
				whichAlien2move = 20;
				alien2moveTracker = 0;
				alien2return = false;
				alMove2on = false;
				timerAlien2move();
				
				if (whichAlien3move != 20)
				{
					alien3[whichAlien3move].x = alien3[whichAlien3move].initialX;
					alien3[whichAlien3move].y = alien3[whichAlien3move].initialY;
					alien3[whichAlien3move].image = alien3[whichAlien3move].initialImage;
					alien3[whichAlien3move].moving = false;
				}
				whichAlien3move = 20;
				alien3moveTracker = 0;
				alien3return = false;
				alMove3on = false;
				timerAlien3move();
				
				shipExplOn = true;
				timerShipExplode();
			}
			
			if (alien1[whichAlien1move].y > 500)
			{
				alien1[whichAlien1move].y = -30;
				alien1return = true;
				alien1[whichAlien1move].x = alien1[whichAlien1move].initialX;
			}
			
			if (alien1return == true)
			{
				alien1[whichAlien1move].x = alien1[whichAlien1move].initialX;
				
				if (alien1[whichAlien1move].y > alien1[whichAlien1move].initialY)
				{
					alien1[whichAlien1move].y = alien1[whichAlien1move].initialY;
					alien1[whichAlien1move].moving = false;
					alien1[whichAlien1move].image = alien1[whichAlien1move].initialImage;
					whichAlien1move = 20;
					alien1moveTracker = 20;
					alien1return = false;
				}
			}
		}
	}
	
	function alien2move()
	{
		alien2moveTracker += 1;
		
		if (alien2hits == 16)
		{
			whichAlien2move = 20;
			alien2moveTracker = 0;
			alien2return = false;
			alMove2on = false;
			timerAlien2move();
		}
		
		if (alien2moveTracker == 40)
		{
			for (n = 0; n < 100; n++)
			{
				var pick = Math.floor(Math.random() * 16) * 1;
				if (AIMon == true && alien2[pick].hit == false)
				{
					n = 100;
					whichAlien2move = pick;
					alien2[whichAlien2move].moving = true;
					alien2[whichAlien2move].initialX = alien2[whichAlien2move].x;
					alien2[whichAlien2move].initialY = alien2[whichAlien2move].y;
					alien2[whichAlien2move].initialImage = alien2[whichAlien2move].image;
					alien2targetX = shipX + 2;
					if (alien2[whichAlien2move].image == "alien2v1up")
					{
							alien2[whichAlien2move].image = "alien2v1down";
					}
					else if (alien2[whichAlien2move].image == "alien2v2up")
					{
							alien2[whichAlien2move].image = "alien2v2down";
					}
					
					var sound = document.getElementById("alienFlying"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
				}
			}
		}
		else if (alien2moveTracker > 40)
		{
			if (alien2[whichAlien2move].hit == true)
			{
				whichAlien2move = 20;
				alien2moveTracker = 0;
				alien2return = false;
			}
			
			alien2[whichAlien2move].y += 4;
			if (alien2[whichAlien2move].x - alien2targetX > 1)
			{
				alien2[whichAlien2move].x -= 3;
			}
			else if (alien2[whichAlien2move].x - alien2targetX < -1)
			{
				alien2[whichAlien2move].x += 3;
			}
			
			if (alien2[whichAlien2move].y > 250 && alienBullets[1].fired == false && alienBullets[1].fireAbility == true)
			{
				alienBullets[1].fired = true;
				alienBullets[1].x = alien2[whichAlien2move].x + 10;
				alienBullets[1].y = alien2[whichAlien2move].y + 4;
				alienBullets[1].targetX = shipX + 12;
				alienBullets[1].DX = (alienBullets[1].x - alienBullets[1].targetX) / 22;
				if (alienBullets[1].DX >= 6)
				{
					alienBullets[1].DX = 6;
					
				}
				else if (alienBullets[1].DX <= -6)
				{
					alienBullets[1].DX = -6;
					
				}
				timerAlienBullet2();
			}
			
			var rect1 = {x: alien2[whichAlien2move].x, y: alien2[whichAlien2move].y, width: 26, height: 20}
			var rect2 = {x: shipX, y: shipY, width: 30, height: 32}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien2[whichAlien2move].hit == false)
			{
				// collision detected
				alien2[whichAlien2move].hit = true;
				if (alExpl1on == false)
				{
					alienTypeExplode1 = 2;
					whichAlienExplode1 = whichAlien2move;
					alExpl1on = true;
					timerAlienExplode1();
				}
				else if (alExpl2on == false)
				{
					alienTypeExplode2 = 2;
					whichAlienExplode2 = whichAlien2move;
					alExpl2on = true;
					timerAlienExplode2();
				}
				else if (alExpl3on == false)
				{
					alienTypeExplode3 = 2;
					whichAlienExplode3 = whichAlien2move;
					alExpl3on = true;
					timerAlienExplode3();
				}
				
				alien2hits += 1;
				score += alien2score;
				
				whichAlien2move = 20;
				alien2moveTracker = 0;
				alien2return = false;
				alMove2on = false;
				timerAlien2move();
				
				if (whichAlien1move != 20)
				{
					alien1[whichAlien1move].x = alien1[whichAlien1move].initialX;
					alien1[whichAlien1move].y = alien1[whichAlien1move].initialY;
					alien1[whichAlien1move].image = alien1[whichAlien1move].initialImage;
					alien1[whichAlien1move].moving = false;
				}
				whichAlien1move = 20;
				alien1moveTracker = 0;
				alien1return = false;
				alMove1on = false;
				timerAlien1move();
				
				if (whichAlien3move != 20)
				{
					alien3[whichAlien3move].x = alien3[whichAlien3move].initialX;
					alien3[whichAlien3move].y = alien3[whichAlien3move].initialY;
					alien3[whichAlien3move].image = alien3[whichAlien3move].initialImage;
					alien3[whichAlien3move].moving = false;
				}
				whichAlien3move = 20;
				alien3moveTracker = 0;
				alien3return = false;
				alMove3on = false;
				timerAlien3move();
				
				shipExplOn = true;
				timerShipExplode();
			}
			
			if (alien2[whichAlien2move].y > 500)
			{
				alien2[whichAlien2move].y = -30;
				alien2return = true;
				alien2[whichAlien2move].x = alien2[whichAlien2move].initialX;
			}
			
			if (alien2return == true)
			{
				alien2[whichAlien2move].x = alien2[whichAlien2move].initialX;
				
				if (alien2[whichAlien2move].y > alien2[whichAlien2move].initialY)
				{
					alien2[whichAlien2move].y = alien2[whichAlien2move].initialY;
					alien2[whichAlien2move].moving = false;
					alien2[whichAlien2move].image = alien2[whichAlien2move].initialImage;
					whichAlien2move = 20;
					alien2moveTracker = 30;
					alien2return = false;
				}
			}
		}
	}
	
	function alien3move()
	{
		alien3moveTracker += 1;
		
		if (alien3hits == 4)
		{
			whichAlien3move = 20;
			alien3moveTracker = 0;
			alien3return = false;
			alMove3on = false;
			timerAlien3move();
		}
		
		if (alien3moveTracker == 70)
		{
			for (n = 0; n < 100; n++)
			{
				var pick = Math.floor(Math.random() * 4) * 1;
				if (AIMon == true && alien3[pick].hit == false)
				{
					n = 100;
					whichAlien3move = pick;
					alien3[whichAlien3move].moving = true;
					alien3[whichAlien3move].initialX = alien3[whichAlien3move].x;
					alien3[whichAlien3move].initialY = alien3[whichAlien3move].y;
					alien3[whichAlien3move].initialImage = alien3[whichAlien3move].image;
					alien3targetX = shipX;
					if (alien3[whichAlien3move].image == "alien3v1up")
					{
							alien3[whichAlien3move].image = "alien3v1down";
					}
					else if (alien3[whichAlien3move].image == "alien3v2up")
					{
							alien3[whichAlien3move].image = "alien3v2down";
					}
					else if (alien3[whichAlien3move].image == "alien3v3up")
					{
							alien3[whichAlien3move].image = "alien3v3down";
					}
					else if (alien3[whichAlien3move].image == "alien3v4up")
					{
							alien3[whichAlien3move].image = "alien3v4down";
					}
					
					var sound = document.getElementById("alienFlying"); 
					sound.pause();
					sound.currentTime = 0;
					sound.play();
				}
			}
		}
		else if (alien3moveTracker > 70)
		{
			if (alien3[whichAlien3move].hit == true)
			{
				whichAlien3move = 20;
				alien3moveTracker = 0;
				alien3return = false;
			}
			
			alien3[whichAlien3move].y += 4;
			if (alien3[whichAlien3move].x - alien3targetX > 1)
			{
				alien3[whichAlien3move].x -= 3;
			}
			else if (alien3[whichAlien3move].x - alien3targetX < -1)
			{
				alien3[whichAlien3move].x += 3;
			}
			
			if (alien3[whichAlien3move].y > 250 && alienBullets[2].fired == false && alienBullets[2].fireAbility == true)
			{
				alienBullets[2].fired = true;
				alienBullets[2].x = alien3[whichAlien3move].x + 10;
				alienBullets[2].y = alien3[whichAlien3move].y + 4;
				alienBullets[2].targetX = shipX + 12;
				alienBullets[2].DX = (alienBullets[2].x - alienBullets[2].targetX) / 22;
				if (alienBullets[2].DX >= 6)
				{
					alienBullets[2].DX = 6;
					
				}
				else if (alienBullets[2].DX <= -6)
				{
					alienBullets[2].DX = -6;
					
				}
				timerAlienBullet3();
			}
			
			var rect1 = {x: alien3[whichAlien3move].x, y: alien3[whichAlien3move].y, width: 26, height: 20}
			var rect2 = {x: shipX, y: shipY, width: 30, height: 32}

			if (rect1.x < rect2.x + rect2.width &&
					rect1.x + rect1.width > rect2.x &&
					rect1.y < rect2.y + rect2.height &&
					rect1.height + rect1.y > rect2.y &&
					alien3[whichAlien3move].hit == false)
			{
				// collision detected
				alien3[whichAlien3move].hit = true;
				if (alExpl1on == false)
				{
					alienTypeExplode1 = 3;
					whichAlienExplode1 = whichAlien3move;
					alExpl1on = true;
					timerAlienExplode1();
				}
				else if (alExpl2on == false)
				{
					alienTypeExplode2 = 3;
					whichAlienExplode2 = whichAlien3move;
					alExpl2on = true;
					timerAlienExplode2();
				}
				else if (alExpl3on == false)
				{
					alienTypeExplode3 = 3;
					whichAlienExplode3 = whichAlien3move;
					alExpl3on = true;
					timerAlienExplode3();
				}
				
				alien3hits += 1;
				score += alien3score;
				
				whichAlien3move = 20;
				alien3moveTracker = 0;
				alien3return = false;
				alMove3on = false;
				timerAlien3move();
				
				if (whichAlien1move != 20)
				{
					alien1[whichAlien1move].x = alien1[whichAlien1move].initialX;
					alien1[whichAlien1move].y = alien1[whichAlien1move].initialY;
					alien1[whichAlien1move].image = alien1[whichAlien1move].initialImage;
					alien1[whichAlien1move].moving = false;
				}
				whichAlien1move = 20;
				alien1moveTracker = 0;
				alien1return = false;
				alMove1on = false;
				timerAlien1move();
				
				if (whichAlien2move != 20)
				{
					alien2[whichAlien2move].x = alien2[whichAlien2move].initialX;
					alien2[whichAlien2move].y = alien2[whichAlien2move].initialY;
					alien2[whichAlien2move].image = alien2[whichAlien2move].initialImage;
					alien2[whichAlien2move].moving = false;
				}
				whichAlien2move = 20;
				alien2moveTracker = 0;
				alien2return = false;
				alMove2on = false;
				timerAlien2move();
				
				shipExplOn = true;
				timerShipExplode();
			}
			
			if (alien3[whichAlien3move].y > 500)
			{
				alien3[whichAlien3move].y = -30;
				alien3return = true;
				alien3[whichAlien3move].x = alien3[whichAlien3move].initialX;
			}
			
			if (alien3return == true)
			{
				alien3[whichAlien3move].x = alien3[whichAlien3move].initialX;
				
				if (alien3[whichAlien3move].y > alien3[whichAlien3move].initialY)
				{
					alien3[whichAlien3move].y = alien3[whichAlien3move].initialY;
					alien3[whichAlien3move].moving = false;
					alien3[whichAlien3move].image = alien3[whichAlien3move].initialImage;
					whichAlien3move = 20;
					alien3moveTracker = 50;
					alien3return = false;
				}
			}
		}
	}
	
	function alien1bulletMove()
	{
		alienBullets[0].y += 8;
		alienBullets[0].x -= alienBullets[0].DX;
		
		if (alienBullets[0].y > 700)
		{
			alienBullets[0].y = -100;
			alienBullets[0].x = -100;
			alienBullets[0].fired = false;
			timerAlienBullet1();
		}
		
		var rect1 = {x: alienBullets[0].x + 1, y: alienBullets[0].y + 1, width: 4, height: 14}
		var rect2 = {x: shipX + 1, y: shipY + 1, width: 28, height: 30}

		if (rect1.x < rect2.x + rect2.width &&
				rect1.x + rect1.width > rect2.x &&
				rect1.y < rect2.y + rect2.height &&
				rect1.height + rect1.y > rect2.y &&
				shipExplOn == false)
		{
			// collision detected
			alienBullets[0].y = -100;
			alienBullets[0].x = -100;
			alienBullets[0].fired = false;
			timerAlienBullet1();
			
			if (whichAlien1move != 20)
			{
				alien1[whichAlien1move].x = alien1[whichAlien1move].initialX;
				alien1[whichAlien1move].y = alien1[whichAlien1move].initialY;
				alien1[whichAlien1move].image = alien1[whichAlien1move].initialImage;
				alien1[whichAlien1move].moving = false;
			}
			whichAlien1move = 20;
			alien1moveTracker = 0;
			alien1return = false;
			alMove1on = false;
			timerAlien1move();
			
			if (whichAlien2move != 20)
			{
				alien2[whichAlien2move].x = alien2[whichAlien2move].initialX;
				alien2[whichAlien2move].y = alien2[whichAlien2move].initialY;
				alien2[whichAlien2move].image = alien2[whichAlien2move].initialImage;
				alien2[whichAlien2move].moving = false;
			}
			whichAlien2move = 20;
			alien2moveTracker = 0;
			alien2return = false;
			alMove2on = false;
			timerAlien2move();
			
			if (whichAlien3move != 20)
			{
				alien3[whichAlien3move].x = alien3[whichAlien3move].initialX;
				alien3[whichAlien3move].y = alien3[whichAlien3move].initialY;
				alien3[whichAlien3move].image = alien3[whichAlien3move].initialImage;
				alien3[whichAlien3move].moving = false;
			}
			whichAlien3move = 20;
			alien3moveTracker = 0;
			alien3return = false;
			alMove3on = false;
			timerAlien3move();
			
			shipExplOn = true;
			timerShipExplode();
		}
	}
	
	function alien2bulletMove()
	{
		alienBullets[1].y += 8;
		alienBullets[1].x -= alienBullets[1].DX;
		
		if (alienBullets[1].y > 700)
		{
			alienBullets[1].y = -100;
			alienBullets[1].x = -100;
			alienBullets[1].fired = false;
			timerAlienBullet2();
		}
		
		var rect1 = {x: alienBullets[1].x + 1, y: alienBullets[1].y + 1, width: 4, height: 14}
		var rect2 = {x: shipX + 1, y: shipY + 1, width: 28, height: 30}

		if (rect1.x < rect2.x + rect2.width &&
				rect1.x + rect1.width > rect2.x &&
				rect1.y < rect2.y + rect2.height &&
				rect1.height + rect1.y > rect2.y &&
				shipExplOn == false)
		{
			// collision detected
			alienBullets[1].y = -100;
			alienBullets[1].x = -100;
			alienBullets[1].fired = false;
			timerAlienBullet2();
			
			if (whichAlien1move != 20)
			{
				alien1[whichAlien1move].x = alien1[whichAlien1move].initialX;
				alien1[whichAlien1move].y = alien1[whichAlien1move].initialY;
				alien1[whichAlien1move].image = alien1[whichAlien1move].initialImage;
				alien1[whichAlien1move].moving = false;
			}
			whichAlien1move = 20;
			alien1moveTracker = 0;
			alien1return = false;
			alMove1on = false;
			timerAlien1move();
			
			if (whichAlien2move != 20)
			{
				alien2[whichAlien2move].x = alien2[whichAlien2move].initialX;
				alien2[whichAlien2move].y = alien2[whichAlien2move].initialY;
				alien2[whichAlien2move].image = alien2[whichAlien2move].initialImage;
				alien2[whichAlien2move].moving = false;
			}
			whichAlien2move = 20;
			alien2moveTracker = 0;
			alien2return = false;
			alMove2on = false;
			timerAlien2move();
			
			if (whichAlien3move != 20)
			{
				alien3[whichAlien3move].x = alien3[whichAlien3move].initialX;
				alien3[whichAlien3move].y = alien3[whichAlien3move].initialY;
				alien3[whichAlien3move].image = alien3[whichAlien3move].initialImage;
				alien3[whichAlien3move].moving = false;
			}
			whichAlien3move = 20;
			alien3moveTracker = 0;
			alien3return = false;
			alMove3on = false;
			timerAlien3move();
			
			shipExplOn = true;
			timerShipExplode();
		}
	}
	
	function alien3bulletMove()
	{
		alienBullets[2].y += 8;
		alienBullets[2].x -= alienBullets[2].DX;
		
		if (alienBullets[2].y > 700)
		{
			alienBullets[2].y = -100;
			alienBullets[2].x = -100;
			alienBullets[2].fired = false;
			timerAlienBullet3();
		}
		
		var rect1 = {x: alienBullets[2].x + 1, y: alienBullets[2].y + 1, width: 4, height: 14}
		var rect2 = {x: shipX + 1, y: shipY + 1, width: 28, height: 30}

		if (rect1.x < rect2.x + rect2.width &&
				rect1.x + rect1.width > rect2.x &&
				rect1.y < rect2.y + rect2.height &&
				rect1.height + rect1.y > rect2.y &&
				shipExplOn == false)
		{
			// collision detected
			alienBullets[2].y = -100;
			alienBullets[2].x = -100;
			alienBullets[2].fired = false;
			timerAlienBullet3();
			
			if (whichAlien1move != 20)
			{
				alien1[whichAlien1move].x = alien1[whichAlien1move].initialX;
				alien1[whichAlien1move].y = alien1[whichAlien1move].initialY;
				alien1[whichAlien1move].image = alien1[whichAlien1move].initialImage;
				alien1[whichAlien1move].moving = false;
			}
			whichAlien1move = 20;
			alien1moveTracker = 0;
			alien1return = false;
			alMove1on = false;
			timerAlien1move();
			
			if (whichAlien2move != 20)
			{
				alien2[whichAlien2move].x = alien2[whichAlien2move].initialX;
				alien2[whichAlien2move].y = alien2[whichAlien2move].initialY;
				alien2[whichAlien2move].image = alien2[whichAlien2move].initialImage;
				alien2[whichAlien2move].moving = false;
			}
			whichAlien2move = 20;
			alien2moveTracker = 0;
			alien2return = false;
			alMove2on = false;
			timerAlien2move();
			
			if (whichAlien3move != 20)
			{
				alien3[whichAlien3move].x = alien3[whichAlien3move].initialX;
				alien3[whichAlien3move].y = alien3[whichAlien3move].initialY;
				alien3[whichAlien3move].image = alien3[whichAlien3move].initialImage;
				alien3[whichAlien3move].moving = false;
			}
			whichAlien3move = 20;
			alien3moveTracker = 0;
			alien3return = false;
			alMove3on = false;
			timerAlien3move();
			
			shipExplOn = true;
			timerShipExplode();
		}
	}
	
	function shipExplode()
	{
		shipExplodeTracker += 1;
		
		if (shipExplodeTracker == 1)
		{
			//reset 3 also
			
			shipX -= 17;
			shipY -= 16;
			shipImage = "shipExplode1";
			
			moveAbility = false;
			fireAbility = false;
			
			var sound = document.getElementById("shipExplode"); 
			sound.pause();
			sound.currentTime = 0;
			sound.play();
		}
		else if (shipExplodeTracker == 2)
		{
			shipImage = "shipExplode2";
		}
		else if (shipExplodeTracker == 3)
		{
			shipImage = "shipExplode3";
		}
		else if (shipExplodeTracker == 4)
		{
			shipImage = "shipExplode4";
		}
		else if (shipExplodeTracker == 5)
		{
			shipX = -100;
			shipY = -100;
			bulletX1 = -100;
			bulletY1 = -100;
			bulletX2 = -100;
			bulletY2 = -100;
			shipImage = "ship";
		}
		else if (shipExplodeTracker == 18)
		{
			if (life3 == true)
			{
				drawReadyVar = true;
				whichLife = 3;
			}
			else if (life2 == true)
			{
				drawReadyVar = true;
				whichLife = 2;
			}
			else if (life1 == true)
			{
				drawReadyVar = true;
				whichLife = 1;
			}
			else
			{
				drawGameOverVar = true;
			}
		}
		else if (shipExplodeTracker == 27 && drawGameOverVar == false)
		{
			if (whichLife == 3)
			{
				life3 = false;
			}
			else if (whichLife == 2)
			{
				life2 = false;
			}
			else if (whichLife == 1)
			{
				life1 = false;
			}
			
			shipX = 205;
			shipY = 430;
			moveAbility = true;
			bulletX1 = 217;
			bulletY1 = 430;
			bulletX2 = 217;
			bulletY2 = 430;
		}
		else if (shipExplodeTracker == 40 && drawGameOverVar == true)
		{
			AIMtracker = 0;
			AIMon = false;
			timerAlienIdleMovement();
			var sound = document.getElementById("ambience"); 
			sound.pause();
			
			drawGameOverVar = false;
			shipExplodeTracker = 0;
			shipExplOn = false;
			timerShipExplode();
			
			gameScreen = false;
			scoresScreen = true;
			ratioScreen = true;
			
			//go to hit-miss and scores
		}
		else if (shipExplodeTracker == 37 && drawGameOverVar == false)
		{
			fireAbility = true;
			shipExplodeTracker = 0;
			shipExplOn = false;
			timerShipExplode();
			drawReadyVar = false;
			
			alMove1on = true;
			timerAlien1move();
			alMove2on = true;
			timerAlien2move();
			alMove3on = true;
			timerAlien3move();
		}
	}
// MOVEMENTS end

//track High Score

	function setCookie(cname, cvalue, exdays)
	{
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" +cvalue + "; " + expires;
	}
	
	function getCookie(cname)
	{
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++)
		{
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}
	
	function checkCookie()
	{
		var previousScore = getCookie("highscore");
		if (previousScore != "")
		{
			highscore = parseInt(previousScore);
		}
		else 
		{
			setCookie("highscore", highscore, 365);
		}
	}
	