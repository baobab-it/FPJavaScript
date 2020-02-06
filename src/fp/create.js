import create from "lodash-es/create";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("create", create);
func.placeholder = placeholder;

export default func;
