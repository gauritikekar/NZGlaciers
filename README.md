# Drone Movement

Scientists are concerned about the degradation of glaciers in New Zealand. But due to the difficulties of the terrain they are conducting their research using automated drones. For each "drop" they map out an area of the glacier into a rectangle, and drop the drone from a helicopter. The drone is then sent a series of commands which move it through the rectangle and it photographs each location as it goes.

## Functionality

### User inputs:

1. The maximum coordinates (North East corner) of the rectangle they are to explore, separated by spaces, from the South West corner/coordinate. (ie The South West corner of the grid is 0, 0).
	validation: format should be 2 numbers with a space
2. The drop coordinates and direction it faces for their starting position in the rectangle
	validation: format should be 2 numbers with a space
3. The movement and turning commands	
	validation: format should be a string with no spaces and only M, L, R characters

### Expected output:
Once "Submit" is clicked with above data, it will show the Drone's position in the format ( x y directionfacing)

## Example

Input
5 5
2 2 East
MMRM

Output
1 4 South

## Current status achieved
1. The the input fields are correct it changes the drone's position 
2. It is made sure that drone does not cross the rectangular boundary.


## TODO
1. Validate user inputs
2. Add Q at the end instead of submit button
3. Display error when drone tries to move out of the rectangle. ( Only the displaying part is left)
4. Add new testcases
5. Improve UI 
   - add a drone image to make the movement sound more real?
   - show a topographic view of the glacier region inside a bounding rectangle. i.e. basically an image of the glaciers from the sky.
