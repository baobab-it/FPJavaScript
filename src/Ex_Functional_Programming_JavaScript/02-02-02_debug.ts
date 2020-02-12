// Learning Functional Programming with Javascript
const DEBUG_MODE_ENABLED = false;
// ...
const printDebugMessage = (msg: string) =>  console.log("DEBUG: " + msg);

const doNothing = () => { };

let debug = DEBUG_MODE_ENABLED ? printDebugMessage : doNothing;

// ...
debug("Some debug message");


