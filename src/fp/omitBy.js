import omitBy from "lodash-es/omitBy";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("omitBy", omitBy);
func.placeholder = placeholder;

export default func;
