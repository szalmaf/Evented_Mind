// Object literal syntax using curly braces to create and object
// person = {};

// Create object using the Object constructor
// person = new Object();

// Create object using the create method
// person = Object.create();

// Add 'name' property to object with the value "Chris"
// Properties are name-value pairs
// person.name = "Chris;"
// person.year = 2014;
// person.getName = function(){ return this.name;};

// Add properties using index notation. Useful when a property's name
// is in a variable
// person['year'] = 2014;
// var prop = 'name';
// person[prop] = 'Chris'

// Compact object literal way of creating object with 
// properties, methods using key-value pairs
// person = {
// 	name: 'Chris';
// 	year: 2014;
// 	getName: function(){
// 		return name;
// 	}
// };

// Constructor function
Person = function(){
	this.name = 'Chris';
	this.year = 2014;
	this.toString = function(){
		return this.name + ' ' + this.year;
	}
};

person = new Person();

// Configuring object properties
o = {
	firstName: 'Evented',
	lastName: 'Mind'
};

Object.defineProperty(o, 'fullName', {
	enumerable: true,
	configurable: true,
	get: function(){
		console.log('Getting the full name');
		return this._fullName;
	},
	set: function(value){
		this._fullName = value + '_modified';
	}
});




Parent = {
	toString: function(){
		return this.firstName + ' ' + this.lastName;
	}
};


Child = {
	firstName: 'Evented',
	lastName: 'Mind'
};

// Add parent object to child object
Child.__proto__ = Parent;





