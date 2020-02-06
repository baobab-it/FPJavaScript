import overArgs from "lodash-es/overArgs";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("overArgs", overArgs);
func.placeholder = placeholder;

export default func;
