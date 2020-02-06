import unionBy from "lodash-es/unionBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("unionBy", unionBy);
func.placeholder = placeholder;

export default func;
