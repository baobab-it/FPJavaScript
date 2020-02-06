import every from "lodash-es/every";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("every", every);
func.placeholder = placeholder;

export default func;
