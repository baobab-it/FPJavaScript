import zipObject from "lodash-es/zipObject";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("zipObject", zipObject);
func.placeholder = placeholder;

export default func;
