import random from "lodash-es/random";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("random", random);
func.placeholder = placeholder;

export default func;
