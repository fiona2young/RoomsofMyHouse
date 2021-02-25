/************************************************
RoomsofMyHouse
  by Fiona Young
Overview – This is an interactive walk-through of my self-imagined house.

------------------------------------------------
Notes: 
(1) The functions drawn are all seperate features.
************************************************/


//Global variables
var images = [];
var drawFunction;

//Preload code
function preload() {
  images[0] = loadImage('assets/Entryway.png');
  images[1] = loadImage('assets/LivingRoom.png');
  images[2] = loadImage('assets/Kitchen.png');
  images[3] = loadImage('assets/Hallway.png');
  images[4] = loadImage('assets/Bathroom.png');
  images[5] = loadImage('assets/Room1.png');
  images[6] = loadImage('assets/Room2.png');
}

//Setup code
function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  textAlign(CENTER);

  drawFunction = drawEntry;
}

//Draw code
function draw() {
  background(240);

  drawFunction();
}

//Entryway
drawEntry = function() {
   image(images[0],width/2, height/2);
}

//Living Room
drawLivingRoom = function() {
   image(images[1],width/2, height/2);
}

//Kitchen
drawKitchen = function() {
   image(images[2],width/2, height/2);
}

//Hallway
drawHallway = function() {
   image(images[3],width/2, height/2);
}

//Bathroom
drawBathroom = function() {
   image(images[4],width/2, height/2);
}

//Room 1
drawRoom1 = function() {
   image(images[5],width/2, height/2);
}

//Room 2
drawRoom2 = function() {
   image(images[6],width/2, height/2);
}

function keyTyped() {
      if( drawFunction === drawEntry ) {
        return;
      }
    
      if( key === 'k' ) {
        drawFunction = drawKitchen;
      }
      else if( key === 'e' ) {
        drawFunction = drawEntry;
      }
    }

function keyPressed() {
      if( keyCode === RIGHT_ARROW ) {
        drawFunction = drawHallway;
      }
      else if( keyCode === LEFT_ARROW ) {
        drawFunction = drawRoom2;
      }
    }

function mousePressed() {
  if( drawFunction === drawEntry ) {
    if( (mouseX > 160) && (mouseX < 352) && (mouseY > 140) && (mouseY < 585) ) {
        drawFunction = drawLivingRoom;
    }
  }
  else if( drawFunction === drawHallway ) {
    if( (mouseX > 370) && (mouseX < 558) && (mouseY > 188) && (mouseY < 555) ) {
        drawFunction = drawBathroom;
    }
    if( (mouseX > 876) && (mouseX < 1054) && (mouseY > 173) && (mouseY < 533) ) {
        drawFunction = drawRoom1;
    }
  }
}