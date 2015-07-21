// Object literal syntax using curly braces to create and object
person = {};

// Create object using the Object constructor
person = new Object();

// Add 'name' property to object with the value "Chris"
// Properties are name-value pairs
// person.name = "Chris;"
// person.year = 2014;
person.getName = function(){ return this.name;};

// Add properties using index notation. Useful when a property's name
// is in a variable
person['year'] = 2014;
var prop = 'name';
person[prop] = 'Chris'