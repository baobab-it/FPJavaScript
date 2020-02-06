import wrap from "lodash-es/wrap";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("wrap", wrap);
func.placeholder = placeholder;

export default func;
