import flatMapDepth from "lodash-es/flatMapDepth";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("flatMapDepth", flatMapDepth);
func.placeholder = placeholder;

export default func;
