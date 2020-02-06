import differenceWith from "lodash-es/differenceWith";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("differenceWith", differenceWith);
func.placeholder = placeholder;

export default func;
