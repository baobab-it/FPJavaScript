import templateSettings from "lodash-es/templateSettings";
import convert from "./convert.js";
import _falseOptions from "./_falseOptions.js";
import placeholder from "./placeholder.js";

var func = convert("templateSettings", templateSettings, _falseOptions);
func.placeholder = placeholder;

export default func;
