import takeRight from "lodash-es/takeRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("takeRight", takeRight);
func.placeholder = placeholder;

export default func;
