import forInRight from "lodash-es/forInRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("forInRight", forInRight);
func.placeholder = placeholder;

export default func;
