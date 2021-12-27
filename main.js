canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
satellite_width = 100;
satellite_height = 90;

satellite_image = "satellite.png";
satellite_x = 10;
satellite_y = 10;

function add()
{
    background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;   

	satellite_imgTag = new Image(); 
	satellite_imgTag.onload = uploadrover; 
	satellite_imgTag.src = satellite_image;   
}
 
function uploadsatellite() {
	ctx.drawImage(satellite_imgTag, satellite_x, satellite_y, satellite_width, satellite_height);
}
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

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
	if(satellite_y >=0)
	{
		satellite_y = satellite_y - 10;
		console.log("When up arrow is pressed,  x = " + satellite_x + " | y = " +satellite_y);
		 uploadBackground();
		 uploadsatellite();
	}
}

function down()
{
	if(satellite_y <=500)
	{
		satellite_y =satellite_y+ 10;
		console.log("When down arrow is pressed,  x = " + satellite_x + " | y = " +satellite_y);
		uploadBackground();
		 uploadsatellite();
	}
}
function left()
{
	if(satellite_x >= 0)
	{
		satellite_x =satellite_x - 10;
		console.log("When left arrow is pressed,  x = " + satellit_x + " | y = " +satellite_y);
		uploadBackground();
		 uploadsatellite();
	}
}
function right()
{
	if(satellite_x <= 700)
	{
		satellite_x =satellite_x + 10;
		console.log("When right arrow is pressed,  x = " + satellite_x + " | y = " +satellite_y);
		uploadBackground();
		uploadsatellite();
   }
}
	






















