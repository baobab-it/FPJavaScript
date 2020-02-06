import reverse from "lodash-es/reverse";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("reverse", reverse);
func.placeholder = placeholder;

export default func;
