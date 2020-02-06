import method from "lodash-es/method";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("method", method);
func.placeholder = placeholder;

export default func;
