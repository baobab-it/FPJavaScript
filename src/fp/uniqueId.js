import uniqueId from "lodash-es/uniqueId";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("uniqueId", uniqueId);
func.placeholder = placeholder;

export default func;
