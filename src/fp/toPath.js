import toPath from "lodash-es/toPath";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("toPath", toPath, _falseOptions);
func.placeholder = placeholder;

export default func;
