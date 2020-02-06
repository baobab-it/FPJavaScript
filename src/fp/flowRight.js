import convert from "./convert.js";
import flowRight from "lodash-es/flowRight";
import placeholder from "./placeholder.js";

var func = convert("flowRight", flowRight);
func.placeholder = placeholder;

export default func;
