
var canvas = new fabric.Canvas('myCanvas');


ball_x = 10;
ball_y = 10;

var ball_object = "";
var block_image_object = "";


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image(get_image)
{
	{
		fabric.Image.fromURL(get_image, function(Img) {
			block_image_object = Img;
	
			block_image_object.scaleToWidth(block_image_width);
			block_image_object.scaleToHeight(block_image_height);
			block_image_object.set({
				top:ball_y,
				left:ball_x
			});
	canvas.add(block_image_object);
	
		});
	
	}}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
			if(player_y >=0)
			{
				player_y = player_y - block_image_height;
				console.log("block image height = " + block_image_height);
				console.log("When Up arrow key is pressed, X = " + player_x + " , Y  = " + player_y);
				canvas.remove(player_object);
				player_update();
			}
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

