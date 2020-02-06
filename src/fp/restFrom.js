import rest from "lodash-es/rest";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("restFrom", rest);
func.placeholder = placeholder;

export default func;
