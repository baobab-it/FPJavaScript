import zip from "lodash-es/zip";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("zipAll", zip);
func.placeholder = placeholder;

export default func;
