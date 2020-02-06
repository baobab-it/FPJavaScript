import tap from "lodash-es/tap";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("tap", tap);
func.placeholder = placeholder;

export default func;
