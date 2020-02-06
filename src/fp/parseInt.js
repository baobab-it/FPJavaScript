import parseInt from "lodash-es/parseInt";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("parseInt", parseInt);
func.placeholder = placeholder;

export default func;
