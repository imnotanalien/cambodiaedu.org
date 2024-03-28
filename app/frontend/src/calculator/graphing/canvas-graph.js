//---- Functions/class to draw a graph on an HTML canvas ----

//NOTE: X = 0 and Y = 0 are assumed to be at the center of the canvas

//Scaling: convert an (X,Y) coordinate into pixel coordinates

//About X:
function numtoPixelX( input ) {
	return canvas.width/2 + canvas.width * input / ( X_MAX - X_MIN );
}

//About Y;
function numToPixelY( input ) {
	return canvas.height/2 - canvas.height * input / ( Y_MAX - Y_MIN );
}

//Draw the coordinate axes centered on the point (Xoffset, Yoffset):	
function drawAxes() {
	//Axis color and size:
	context.strokeStyle = "grey"
	context.lineWidth = 1;

	//X axis line:
	context.beginPath();
	context.moveTo( 0, numToPixelY(Yoffset) );
	context.lineTo( canvas.width, numToPixelY(Yoffset) );
	context.stroke();

	//Y axis line:
	context.beginPath();
	context.moveTo( numtoPixelX(Xoffset), 0 );
	context.lineTo( numtoPixelX(Xoffset), canvas.height );
	context.stroke();
}

// Draw the axis tick marks and number scale:

// X axis:
function addAxisLabelX() {
	
	//Scan the numbers within the axis limits:
	for( let index = X_MIN - Xoffset + 1; index < X_MAX - Xoffset; index += 1 ) {
		
		//Ignore the origin
		if( index == 0 ) { 
			continue;
		}
		
		//Add a small line:
		context.beginPath();
		
		context.moveTo( 
			numtoPixelX(index + Xoffset),
			numToPixelY(TICK_WIDTH + Yoffset )
		);
		context.lineTo(
			numtoPixelX(index + Xoffset),
			numToPixelY(-TICK_WIDTH + Yoffset)	
		);

		//Display axis value at a given tick mark:
					
		//Number to display					
		let num = index*XScale;
			num = num.toFixed(TICK_DIGITS);
			num = Number(num);
			num = num.toString();
			
		//Add the number above the line:
		context.fillText(
			num, 
			numtoPixelX(index + Xoffset ) - num.length*2,
			numToPixelY(TICK_WIDTH + Yoffset)
		);	
		//Draw the line/text			
		context.stroke();
	}
}

//Y axis:
function addAxisLabelY() {
	//Scan the numbers within the axis limits:
	for( let index = Y_MIN - Yoffset + 1; index < Y_MAX - Yoffset; index += 1 ) {
		
		//Ignore the origin
		if( index == 0 ) { 
			continue;
		}
		
		//Add a small line:
		context.beginPath();
		
		context.moveTo( 
			numtoPixelX(TICK_WIDTH + Xoffset),
			numToPixelY(index + Yoffset)
		);
		context.lineTo(
			numtoPixelX(-TICK_WIDTH + Xoffset),
			numToPixelY(index + Yoffset)	
		);
					
		//Display axis value at a given tick mark:			
		
		//Number to display		
		let num = index * YScale;
			num = num.toFixed(TICK_DIGITS);
			num = Number(num);
			num = num.toString();
		
		//Add the number above the line:
		context.fillText(
			num, 
			numtoPixelX(TICK_WIDTH + Xoffset),
			numToPixelY(index + Yoffset) + num.length*2
		);
		//Draw the line/text		
		context.stroke();	
	}
}

//Setting up canvas:
function canvasSetup() {
	drawAxes();
	
	//Set text size and color:
	context.font = "10px";
	context.fillStyle = "grey";
	
	//Add tick marks:
	addAxisLabelX();
	addAxisLabelY();
}

//Individual graphs: 
class graph {
	//Each graph has a color and a function:
	constructor() {	
		//Default color:
		this.color = "black";
		
		//Default function does nothing:
		this.inputFunction = (input) => {};
	}
	
	//Define a new function:
	setFunction( input ) {
		this.inputFunction = input;
	}
	
	//Define a new color:
	setColor( input ) {
		this.color = input;
	}
	
	//Display the graph on the HTML canvas:
	drawGraph() {
		
		//Set the line color:
		context.strokeStyle = this.color;
		
		context.beginPath();

		//Evaluate the function at the smallest input value:	
		let xPast = X_MIN;
		let yPast = this.inputFunction( (xPast - Xoffset)*XScale )/YScale + Yoffset;
		
		//Evaluate the function from the smallest value to the largest:
		for( let xNow = X_MIN; xNow < X_MAX; xNow += 0.1 ) {
			
			//Move to the last point on the graph:
			context.moveTo( 
				numtoPixelX(xPast), 
				numToPixelY(yPast)
			);
			
			//Move to the next point on the graph:
			let xInput = (xNow - Xoffset)*XScale;
			let yNow = this.inputFunction( xInput )/YScale + Yoffset;
				
			context.lineTo( 
				numtoPixelX(xNow), 
				numToPixelY(yNow) 
			);
			//Store the current point:
			xPast = xNow;
			yPast = yNow;	
		}
		//Draw the sequence of connected points:
		context.stroke();
	}
}

//Display the graphs with the current offset and scale settings:
function updateGraph() {
	//Remove previous lines:
	context.clearRect( 0, 0, canvas.width, canvas.height);
	
	//Draw the axes:
	canvasSetup();
	
	//Draw the graphs:
	graph1.drawGraph();
	graph2.drawGraph();
	graph3.drawGraph();
}
