import take from "lodash-es/take";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("take", take);
func.placeholder = placeholder;

export default func;
