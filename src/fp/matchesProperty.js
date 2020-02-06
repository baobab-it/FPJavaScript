import matchesProperty from "lodash-es/matchesProperty";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("matchesProperty", matchesProperty);
func.placeholder = placeholder;

export default func;
