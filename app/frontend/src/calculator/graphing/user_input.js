//---- Functions that react to user inputs from the HTML page ----

//Setup event listeners for each button:
function registerEventListeners() {
	//Submit button:
	let bSubmit = document.getElementById('btnSubmit');	
	bSubmit.addEventListener("click", processSubmit );
	
	//- Offset buttons: Shift the axes inside the canvas
		
	//NOTE: All other "offset" functions work the same way as below.
		
	let offsetLeft = document.getElementById('offset_left');
	offsetLeft.addEventListener("click", function(event) {
			//Modify the offset and prevent it from exceeding the axis limit:
			Xoffset -= OFFSET_CHANGE;
			if( Xoffset < X_MIN ) {
				Xoffset = X_MIN;
			}
			//Display the modified graph:
			updateGraph();
		}
	);
		
	let offsetRight = document.getElementById( 'offset_right' );
	offsetRight.addEventListener( "click",
		function(event) {
			Xoffset += OFFSET_CHANGE;
			if( Xoffset > X_MAX ) {
				Xoffset = X_MAX;
			}
			updateGraph();
		}
	);
		
	let offsetUp = document.getElementById( 'offset_up' );
	offsetUp.addEventListener( "click",
		function(event) {
			Yoffset += OFFSET_CHANGE;
			if( Yoffset > Y_MAX ) {
				Yoffset = Y_MAX;
			}
			updateGraph();
		}
	);
	
	let offsetDown = document.getElementById( 'offset_down' );
	offsetDown.addEventListener( "click", 
		function(event) {
			Yoffset -= OFFSET_CHANGE;
			if( Yoffset < Y_MIN ) {
				Yoffset = Y_MIN;
			}
			updateGraph();
		}
	);
		
	// Scale buttons: Expand or contract the axes.
	
	// NOTE: All other "scale" functions work the same way as below.

	//X axis:
	let scalePlusX = document.getElementById( 'scale_x_plus' );
	scalePlusX.addEventListener( "click",
		function(event) {
			//Modify axis scale, then display the modifed graph:
			XScale *= SCALE_FACTOR;
			updateGraph();
		}
	);
		
	let scaleMinusX = document.getElementById( 'scale_x_minus' );
	scaleMinusX.addEventListener( "click",
		function(event) {
			XScale /= SCALE_FACTOR;
			updateGraph();
		}
	);
	
	//Y axis:
	let scalePlusY = document.getElementById( 'scale_y_plus' );
	scalePlusY.addEventListener( "click",
		function(event) {
			YScale *= SCALE_FACTOR;
			updateGraph();
		}
	);
	
	let scaleMinusY = document.getElementById( 'scale_y_minus' );
	scaleMinusY.addEventListener( "click",
		function(event) {
			YScale /= SCALE_FACTOR;
			updateGraph();
		}
	);
} 

// Convert string to function:  [ reference: https://stackoverflow.com/questions/7650071/is-there-a-way-to-create-a-function-from-a-string-with-javascript ]
function strToNumFunc( inputString ) {
	return Function( "x", "return " + inputString + ";" ); 
}

// Actions to take once the submit button is clicked:
function processSubmit() {
	// Reset the position and scale:
	XScale = X_SCALE_DEFAULT;
	YScale = Y_SCALE_DEFAULT;
	Yoffset = Y_OFFSET_DEFAULT;
	Xoffset = X_OFFSET_DEFAULT;
	
	// Retrieve the input expressions and convert them to math functions: 
	let func1 = strToNumFunc( document.getElementById( "eq1" ).value );
	let func2 = strToNumFunc( document.getElementById( "eq2" ).value ); 
	let func3 = strToNumFunc( document.getElementById( "eq3" ).value ); 	
	
	// Save the graph functions:
	graph1.setFunction( func1 );
	graph2.setFunction( func2 );
	graph3.setFunction( func3 );
	
	// Set the color of each graph to the one in the HTML page:
	graph1.setColor( document.getElementById( "colour1" ).value );
	graph2.setColor( document.getElementById( "colour2" ).value );
	graph3.setColor( document.getElementById( "colour3" ).value );
		
	// Redraw graph:
	updateGraph();
}
