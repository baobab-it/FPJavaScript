import minBy from "lodash-es/minBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("minBy", minBy);
func.placeholder = placeholder;

export default func;
