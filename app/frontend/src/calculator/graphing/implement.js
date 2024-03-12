//---- Implementation of graphing functions ----

//---- Constants:

// Default values:

// Scale:
const Y_SCALE_DEFAULT = 1;
const X_SCALE_DEFAULT = 1;

// Offset:
const Y_OFFSET_DEFAULT = 0;
const X_OFFSET_DEFAULT = 0;

// Values at the edge of the canvas:
const Y_MAX = 10;
const Y_MIN = -10;
const X_MAX = 10;
const X_MIN = -10;

// Axis marks:
const TICK_WIDTH = 0.1;
const TICK_DIGITS = 2;

// Axis maninupulation
const OFFSET_CHANGE = 1;		//Change in position of the axes
const SCALE_FACTOR = 2;			//How much the axis is multiplied or divided by

//---- Global variables:

// Scale:
let XScale = Y_SCALE_DEFAULT;
let YScale = X_SCALE_DEFAULT;
	
// Offset:
let Yoffset = Y_OFFSET_DEFAULT;
let Xoffset = X_OFFSET_DEFAULT;

// HTML canvas:
let canvas = document.getElementById( "canvas" );
let context = canvas.getContext("2d");

// Graphs:
let graph1 = new graph();
let graph2 = new graph();
let graph3 = new graph();


//---- Executing functions ----
canvasSetup();
registerEventListeners();
