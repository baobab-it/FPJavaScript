import union from "lodash-es/union";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("union", union);
func.placeholder = placeholder;

export default func;
