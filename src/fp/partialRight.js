import partialRight from "lodash-es/partialRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("partialRight", partialRight);
func.placeholder = placeholder;

export default func;
