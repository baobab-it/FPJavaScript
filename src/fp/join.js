import join from "lodash-es/join";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("join", join);
func.placeholder = placeholder;

export default func;
