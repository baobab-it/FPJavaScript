import remove from "lodash-es/remove";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("remove", remove);
func.placeholder = placeholder;

export default func;
