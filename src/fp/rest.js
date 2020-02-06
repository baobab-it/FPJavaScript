import rest from "lodash-es/rest";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("rest", rest);
func.placeholder = placeholder;

export default func;
