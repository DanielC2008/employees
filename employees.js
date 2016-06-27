 
var Employees = function() {
	this.firstName = null;
	this.lastName = null;
};

var Clinician = function() {
	this.expertise = null;
};
Clinician.prototype = new Employees();

function Operations() {
	this.responsibility =  null;
	
};
Operations.prototype = new Employees();


var Department = function() {
	this.name = null;
};

var FieldOffice = function() {
	this.type = "field Office";
	this.state = null;
};
FieldOffice.prototype = new Department();

var Headquarters = function() {
	this.type = "headquarters";
};
Headquarters.prototype = new Department();



var employeeOne = new Clinician();
employeeOne.firstName = "Marge";
employeeOne.lastName = "Smith";
employeeOne.expertise = "physical threapist";
employeeOne.location = new Headquarters();
employeeOne.location.name = "Clinician";

var employeeTwo = new Clinician();
employeeTwo.firstName = "Tom";
employeeTwo.lastName = "Tim";
employeeTwo.expertise = "phrenologist";
employeeTwo.location = new FieldOffice();
employeeTwo.location.state = "Baltimore";
employeeTwo.location.name = "Clinician";

var employeeThree = new Operations();
employeeThree.firstName = "Sue";
employeeThree.lastName = "Mann";
employeeThree.responsibility = "revenue";
employeeThree.location = new Headquarters();
employeeThree.location.name = "Operations";

var employeeFour = new Operations();
employeeFour.firstName = "Eric";
employeeFour.lastName = "Craft";
employeeFour.responsibility = "compliance";
employeeFour.location = new FieldOffice();
employeeFour.location.state = "Tennessee";
employeeFour.location.name = "Operations";

console.log(`${employeeFour.firstName} ${employeeFour.lastName} works in ${employeeFour.location.name}, in the ${employeeFour.location.state} ${employeeFour.location.type}, and is responsible for ${employeeFour.responsibility}.`);

console.log(`${employeeThree.firstName} ${employeeThree.lastName} works in ${employeeThree.location.name}, at ${employeeThree.location.type}, and is responsible for ${employeeThree.responsibility}.`);

console.log(`${employeeTwo.firstName} ${employeeTwo.lastName} works as a ${employeeTwo.location.name}, in the ${employeeTwo.location.state} ${employeeTwo.location.type}, and is a ${employeeTwo.expertise}.`);

console.log(`${employeeOne.firstName} ${employeeOne.lastName} works as a ${employeeOne.location.name}, at ${employeeOne.location.type}, and is a ${employeeOne.expertise}.`);

