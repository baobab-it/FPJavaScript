import round from "lodash-es/round";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("round", round);
func.placeholder = placeholder;

export default func;
