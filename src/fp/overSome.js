import overSome from "lodash-es/overSome";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("overSome", overSome);
func.placeholder = placeholder;

export default func;
