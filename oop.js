// Constructor
function Building(floors) {
	this.what = "building";
	this.floors = floors;
}

var myHouse = new Building(3);
var myOffice = new Building(5);

// Function
Building.prototype.countFloors = function() {
	console.log('I have', this.floors, 'floors');
};

myHouse.countFloors();
myOffice.countFloors();
//-------------------------------------------------
function Tree(apples) {
	// Properties
}
Tree.prototype.addNode = function () {
};
