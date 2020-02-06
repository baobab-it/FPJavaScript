import mixin from "lodash-es/mixin";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("mixin", mixin);
func.placeholder = placeholder;

export default func;
