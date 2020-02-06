import unzip from "lodash-es/unzip";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("unzip", unzip, _falseOptions);
func.placeholder = placeholder;

export default func;
