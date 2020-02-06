import omit from "lodash-es/omit";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("omit", omit);
func.placeholder = placeholder;

export default func;
