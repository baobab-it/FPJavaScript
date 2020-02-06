import partial from "lodash-es/partial";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("partial", partial);
func.placeholder = placeholder;

export default func;
