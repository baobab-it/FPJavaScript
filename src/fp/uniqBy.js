import uniqBy from "lodash-es/uniqBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("uniqBy", uniqBy);
func.placeholder = placeholder;

export default func;
