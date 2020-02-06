import lastIndexOf from "lodash-es/lastIndexOf";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("lastIndexOf", lastIndexOf);
func.placeholder = placeholder;

export default func;
