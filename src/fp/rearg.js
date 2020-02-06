import rearg from "lodash-es/rearg";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("rearg", rearg);
func.placeholder = placeholder;

export default func;
