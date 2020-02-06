import pullAll from "lodash-es/pullAll";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("pullAll", pullAll);
func.placeholder = placeholder;

export default func;
