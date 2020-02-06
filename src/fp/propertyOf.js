import get from "lodash-es/get";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("propertyOf", get);
func.placeholder = placeholder;

export default func;
