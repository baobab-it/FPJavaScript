import template from "lodash-es/template";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("template", template);
func.placeholder = placeholder;

export default func;
