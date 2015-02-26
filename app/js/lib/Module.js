
// Define the Module constructor
function Module() {

	// Inerit from BaseModule
    //Call the parent constructor, making sure "this" is set correctly during the call
	BaseModule.call(this, arguments);
};

// Inherits from BaseModule.prototype
Module.prototype = Object.create(BaseModule.prototype);

// Set the Constructor property
Module.prototype.constructor = Module;