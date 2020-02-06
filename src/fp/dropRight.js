import dropRight from "lodash-es/dropRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("dropRight", dropRight);
func.placeholder = placeholder;

export default func;
